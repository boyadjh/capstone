import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import UserModel from '../models/User';

export default (passport) => {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.TOKEN_KEY;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    UserModel.findOne({_id: jwt_payload._id}, (err, user) => {
      if(err) {return done(err, false, {message: 'Problem getting user'})}
      if(user) {return done(null, user)}
      else {return done(true, false, {message: 'Invalid token'})}
    })
  }))
}
