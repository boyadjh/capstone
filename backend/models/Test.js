import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Test {
    initSchema() {
        const schema = new Schema({
            author: {
                type: String,
                required: true
            },
        }, {timestamps: true});
        schema.plugin(uniqueValidator);
        mongoose.model("Test", schema)
    }

    getInstance() {
        this.initSchema();
        return mongoose.model("Test");
    }
}

export default Test;
