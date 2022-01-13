import GroupController from "./controllers/GroupController.js";
import PostController from "./controllers/PostController.js";
import ProfileController from "./controllers/ProfileController.js";


export default (server) => {
    server.get('/', (req, res) => {
        res.sendFile(process.cwd()+"/dist/capstone-frontend/index.html");
    })

    server.post('/login', passport)

    server.get('/api/post', PostController.get);
    server.post('/api/post', PostController.insert);
    server.put('/api/post/:id', PostController.update);
    server.delete('/api/post/:id', PostController.delete);

    server.get('/api/group', GroupController.get);
    server.post('/api/group', GroupController.insert);
    server.put('/api/group/:id', GroupController.update);
    server.delete('/api/group/:id', GroupController.delete);

    server.get('/api/profile', ProfileController.get);
    server.post('/api/profile', ProfileController.insert);
    server.put('/api/profile/:id', ProfileController.insert);
    server.delete('/api/profile/:id', ProfileController.delete);
}
