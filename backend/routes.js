import passport from 'passport';
import UserModel from './models/User';

import jwt from 'jsonwebtoken';

import userRoutes from './controllers/userController';
import postRoutes from './controllers/postController';

export default (app) => {

  userRoutes(app);
  postRoutes(app);

  app.get('/', (req, res) => {
    res.sendFile(process.cwd()+'/dist/capstone-frontend/index.html');
  })

  app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      user = user.toObject();
      const token = jwt.sign(
        {_id: user._id, email: user.email},
        process.env.TOKEN_KEY,
        {expiresIn:"7d"}
      )
      user.token = token;
      res.status(201).json(user);
      next();
    })(req, res, next);});

  app.post('/signup', (req, res) => {
    UserModel.findOne({email: req.body.email}, (err, user) => {
      if(err || user) {res.send(`User with email ${req.body.email} already exists.`); return;}
      UserModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }).then(x => {res.send(x)})
        .catch(err => {res.send(`Error creating user`)});
    })
  });

}
