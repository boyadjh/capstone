import PostModel from '../models/Post';
import GroupModel from '../models/Group';
import passport from 'passport';

export default (app) => {
  app.get('/api/posts', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if(err || !user) {res.status(500).send(err)}
      else {
          PostModel.find({groups: {$in: user.groups}}).sort({[req.query.sort]: -1})
            .then(postDocs => {
              res.send(postDocs);
            }).catch(err => res.status(500).send(err));
      }
    })(req, res, next);
  })

  app.post('/api/posts', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if (err || !user) {res.status(500).send(err)}
      else {
        const groupsRegExp = new RegExp(`(${user.groups.join('|')})+`, 'g');
        const matches = req.body.groups.join(' ').match(groupsRegExp);
        if(!matches || matches.length !== req.body.groups.length) {res.status(400).send('Invalid group selection')}
        else {
          PostModel.create({
            ...req.body
          }).then(postDoc => res.send(postDoc))
            .catch(err => res.status(500).send(err));
        }
      }
    })(req, res, next);
  });

  app.put('/api/posts/:postId', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if(err || !user) {res.status(500).send(err)}
      else if (req.params.postId !== req.body._id) {res.status(400).send('Invalid body')}
      else {
        delete req.body._id;
        PostModel.findOne({_id: req.params.postId})
          .then(postDoc => {
            if(postDoc.poster !== user.id) {res.status(401).send('Unauthorized')}
            else if(!postDoc) {res.status(500).send('Problem finding post')}
            else {
              postDoc.title = req.body.title ? req.body.title : postDoc.title;
              postDoc.body = req.body.body ? req.body.body : postDoc.body;
              postDoc.groups = req.body.groups ? req.body.groups : postDoc.groups;
              postDoc.save().then(savedDoc => res.send(savedDoc))
                .catch(err => res.status(500).send('Error updating post'));
            }
          }).catch(err => res.status(500).send('Error finding post'));
      }
    })(req, res, next);
  })
}
