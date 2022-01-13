import mongoose from 'mongoose';

class Connection {
  constructor(url, db) {
    console.log(`Attempting new connection with database ${db} at ${url}`);
    const db_url = url + db;
    mongoose.connect(db_url)
      .then(res => {console.log(`Successfully connected to ${db_url}`);})
      .catch(err => {console.error(`Error connecting to ${db_url}\n${err}`)})
  }
}

export default Connection;
