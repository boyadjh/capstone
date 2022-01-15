import passport from 'passport';
import UserModel from './models/User';

import jwt from 'jsonwebtoken';

import userRoutes from './controllers/userController';
import postRoutes from './controllers/postController';
import groupRoutes from './controllers/groupController';

export default (app) => {

  userRoutes(app);
  groupRoutes(app, passport);
  postRoutes(app);

  app.get('/api/testJwt', function(req, res, next) {
    passport.authenticate('jwt', function (err, user, info) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
        return;
      }
      res.status(200).json(user);
    })(req, res, next);
  });

  app.post('/api/login', function(req, res, next) {
    if(req.headers.authorization) {
      passport.authenticate('jwt', function(err, user, info) {
        console.log('jwt');
        if(!err && user) {
          let ret = user.toObject();
          const token = jwt.sign(
            {_id: user._id, email: user.email},
            process.env.TOKEN_KEY,
            {expiresIn:"7d"}
          )
          delete ret.password;
          res.status(200).json({user: ret, token: token});
        }
      })(req, res, next);
    } else {
      passport.authenticate('local', function(err, user, info) {
        if(err || !user) {
          res.status(404).json('Invalid login');
          return;
        }
        user = user.toObject();
        const token = jwt.sign(
          {_id: user._id, email: user.email},
          process.env.TOKEN_KEY,
          {expiresIn:"7d"}
        )
        delete user.password;
        res.status(201).json({user: user, token: token});
        next();
    })(req, res, next);}});

  app.post('/api/signup', (req, res) => {
    UserModel.findOne({email: req.body.email}, (err, user) => {
      if(err) {res.status(500).send(err)}
      if(user) {res.send(`User with email ${req.body.email} already exists.`); return;}
      UserModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }).then(x => {res.send(x)})
        .catch(err => {res.send(`Error creating user`)});
    })
  });

  app.get(/^((?!\/api\/).)*$/g, (req, res) => {
    res.sendFile(process.cwd()+'/dist/capstone-frontend/index.html');
  })
}
