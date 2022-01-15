import passport from 'passport';

import setupJwt from './jwt';
import setupLocal from './local';


export default (app) => {
  app.use(passport.initialize());

  setupJwt(passport);
  setupLocal(passport);
}
