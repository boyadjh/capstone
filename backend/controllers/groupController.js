import GroupModel from '../models/Group';
import passport from 'passport';

export default (app) => {
  app.get('/api/groups/:groupId', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if(err || !user) {res.status(500).send(err)}
      else {
        GroupModel.findOne({_id: req.params.groupId}, (err, group) => {
          if(err) {res.status(500).send(err)}
          else {
            if(group.members.includes(user.id)) {res.send(group)}
            else {res.status(403).send('Unauthorized')}
          }
        })
      }
    })(req, res, next);
  })

  app.get('/api/groups/getUserGroups', (req, res, next) => {
    passport.authenticate('jwt' , (err, user, info) => {
      if(err || !user) {res.status(500).send(err);}
      else {
        GroupModel.find({
          members: {
            $in: [user._id]
          }
        }, (err, groups) => {
            if(!err || !groups) {res.json(groups)}
            else {res.status(400).send(err)}
          }
        )
      }

    })(req, res, next);
  });

  app.post('/api/groups', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if(err || !user) {res.status(400).send(err)}
      else {
        GroupModel.findOne({name: req.body.name}, (err, group) => {
          if(err) {res.status(500).send(err);}
          else {
            GroupModel.create({
              name: req.body.name,
              description: req.body.description,
              creator: user._id,
              members: req.body.members ? req.body.members : [user._id],
              admins: req.body.admins ? req.body.admins : [user._id]
            })
              .then(group => res.send(group))
              .catch(err => res.status(500).send(err));
          }
        });
      }
    })(req, res, next);
  })

  app.put('/api/groups/:groupId', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if(err || !user) {res.status(500).send(err)}
      else if (req.params.groupId !== req.body._id) {res.status(400).send('Invalid body')}
      else {
        GroupModel.findOne({_id: req.params.groupId}, (err, group) => {
          group = group.toObject();
          if (group.admins.includes(user.id)) {
            delete req.body._id;
            GroupModel.updateOne({_id: req.params.groupId}, {
              ...req.body
            }, (err, docs) => {
              if (err) {res.status(500).send(err)}
              else {
                GroupModel.findOne({_id: req.params.groupId}, (err, group) => {
                  if(err) {res.status(500).send(err)}
                  else {res.send(group)}
                })
              }
            });
          } else {
            res.status(403).json(`Unauthorized`);
          }
        })
      }
    })(req, res, next);
  })
}
