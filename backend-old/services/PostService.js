import Service from './Service.js';

class PostService extends Service{
    constructor(model) {
        super(model);
        model.find().then(res => {
            if (res.length === 0) {
                this.seed(model)
            }
        })
    }

    seed(model) {
        console.log('SEEDING POSTS...')
        model.insertMany([{
            _id: "000000000000",
            poster: "000000000000",
            title: 'Post 1',
            body: 'Lorem Ipsum Dolor Sit Amet',
            groups: ["000000000000"],
        },{
            _id: "000000000001",
            poster: "000000000000",
            title: 'Post 3',
            body: 'Lorem Ipsum Dolor Sit Amet',
            groups: ["000000000002"],
        },{
            _id: "000000000002",
            poster: "000000000001",
            title: 'Post 2',
            body: 'Lorem Ipsum Dolor Sit Amet',
            groups: ["000000000001"],
        }]).then(res => {
            console.log('SUCCESSFULLY SEEDED POSTS')
        })
        }
}

export default PostService;
