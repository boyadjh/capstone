import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Post {
    initSchema() {
        const schema = new Schema({
            poster: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            body: {
                type: String,
                required: true
            },
            groups: {
                type: [String],
                required: true
            }
        }, {timestamps: true});
        schema.plugin(uniqueValidator);
        mongoose.model("Post", schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model("Post");
    }
}

export default Post;
