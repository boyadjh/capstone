import PostModel from '../models/Post';

export default (app) => {
  app.get('/api/posts', (req, res) => {
    PostModel.find({})
      .then(posts => res.send(posts.map(x => {
        let post = x.toObject();
        delete post.groups;
        return post;
      })))
      .catch(err => res.send(err));
  })

  app.post('/api/posts', (req, res) => {
    PostModel.create(req.body)
      .then(post => res.send(post))
      .catch(err => res.send(err));
  });
}
