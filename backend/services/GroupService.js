import Service from './Service.js';

class GroupService extends Service{
    constructor(model) {
        super(model);
        model.find().then(res => {
            if (res.length === 0) {
                this.seed(model);
            }
        });
    }

    seed(model) {
        console.log("SEEDING GROUPS...")
        model.insertMany([{
            _id: "000000000000",
            name: 'Group 1',
            members: ["000000000000"]
        },{
            _id: "000000000001",
            name: 'Group 2',
            members: ["000000000001"]
        },{
            _id: "000000000002",
            name: 'Group 3',
            members: ["000000000000", "000000000001"]
        }]).then(res => {
            console.log("SUCCESSFULLY SEEDED GROUPS");
        });
    }
}

export default GroupService;
