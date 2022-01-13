import mongoose from "mongoose";

const MONGO_URL = 'mongodb://127.0.0.1:27017';

class Connection {
    constructor() {
        console.log("Establishing new connection with url", MONGO_URL)

        mongoose.connect(MONGO_URL).then(e => {
            console.log("Successfully connected to", MONGO_URL)
        }).catch(err => {
            console.error(err);
        });
    }
}

export default new Connection();
