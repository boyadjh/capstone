import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Profile {
    initSchema() {
        const schema = new Schema({
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            fullName: {
              type: String,
              required: true
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            hash: {
                type: String,
                required: true
            },
            groups: {
                type: [{
                    id: {
                        type: String,
                        required: true
                    },
                    name: {
                        type: String,
                        required: true
                    },
                    category: {
                        type: Number,
                        required: true
                    }
                }],
                required: true
            },
            categories: {
                type: [{
                    name: {
                        type: String,
                        required: true
                    },
                    groups: {
                        type: [String],
                        required: true
                    }
                }]
            }
        }, {timestamps: true});
        schema.plugin(uniqueValidator);
        mongoose.model("Profile", schema)
    }

    getInstance() {
        this.initSchema();
        return mongoose.model("Profile");
    }
}

export default Profile;
