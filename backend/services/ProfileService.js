import Service from './Service.js';

class ProfileService extends Service{
    constructor(model) {
        super(model);
        model.find().then(res => {
            if (res.length === 0) {
                this.seed(model);
            }
        });
    }

    seed(model) {
        console.log("SEEDING PROFILES...")
        model.insertMany([{
            _id: "000000000000",
            firstName: "John",
            lastName: "Doe",
            email: "john@morode.com",
            hash: "password",
            groups: [],
            categories: [
                {name: "Category 1", groups: ["000000000000", "000000000002"]},
            ]
        }, {
            _id: "000000000001",
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane@morode.com',
            hash: 'password',
            groups: [],
            categories: [
                {name: 'Family', groups: ["000000000002"]},
                {name: 'Book Club', groups: ["000000000001"]}
            ]
        }]).then(res => {
            console.log("SUCCESSFULLY SEEDED PROFILES");
        })
    }
}

export default ProfileService;
