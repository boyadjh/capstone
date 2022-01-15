import UserModel from '../models/User';
import passport from 'passport';

export default (app) => {
  app.get('/api/users',
    passport.authenticate('jwt'),
    (req, res) => {
      UserModel.find({})
        .then(users => {
          res.send(users.map(e => {
            return e.clean();
          }));
        })
        .catch(err => res.send(err));
    }
  );

  app.get('/api/users/:userId', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if(err || !user) {res.status(500).send(err)}
      else {
        UserModel.findOne({_id: req.params.userId})
          .then(doc => {
            if (!doc) {
              res.status(404).send('No user found')
            } else {
              if(doc.id === user.id) {res.send(doc);}
              else {
                res.send(doc.clean());
              }
            }
          }).catch(err => {
          res.status(500).send(err)
        });
      }
    })(req, res, next);
  })

  app.put('/api/users/:userId', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if(err || !user) {res.status(500).send(err)}
      else if(req.params.userId !== req.body._id) {res.status(400).send('Invalid body')}
      else if(user.id !== req.params.userId) {res.status(409).send('Unauthorized')}
      else {
        delete req.body._id;
        UserModel.findOne({_id: req.params.userId})
          .then(userDoc => {
            if(!userDoc){res.status(500).send('Problem finding user')}
            else {
              userDoc.firstName = req.body.firstName ? req.body.firstName : userDoc.firstName;
              userDoc.lastName = req.body.lastName ? req.body.lastName : userDoc.lastName;
              userDoc.save().then(savedDoc => res.send(savedDoc));
            }
          }).catch(err => {res.status(500).send(err)})
      }
    })(req, res, next);
  })
}
