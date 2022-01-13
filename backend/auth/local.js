import LocalStrategy from "passport-local";
import UserModel from "../models/User";

export default (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, done) => {
    UserModel.findOne({email: email}, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done('test', false)
      }
      user.validatePassword(password)
        .then(res => {
          if (res === false) {
            return done('test', false);
          } else {
            return done(null, user);
          }
        });
    })
  }));


  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

}
