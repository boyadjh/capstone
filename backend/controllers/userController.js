import UserModel from '../models/User';

export default (app) => {
  app.get('/api/users', (req, res) => {
    UserModel.find({})
      .then(users => {res.send(users.map(e => {
        return {
          _id: e._id,
          firstName: e.firstName,
          lastName: e.lastName,
          fullName: e.fullName,
          createdAt: e.createdAt
        }
      }
      ))})
      .catch(err => res.send(err));
  });

}
