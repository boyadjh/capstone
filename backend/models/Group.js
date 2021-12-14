import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Group {
    initSchema() {
        const schema = new Schema({
            name: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: false
            },
            creator: {
              type: String,
              required: true
            },
            members: {
                type: [String],
                required: true
            },
            admins: {
                type: [String],
                required: true
            }
        }, {timestamps: true});
        schema.plugin(uniqueValidator);
        mongoose.model("Group", schema)
    }

    getInstance() {
        this.initSchema();
        return mongoose.model("Group");
    }
}

export default Group;
