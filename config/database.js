const { MongoClient } = require('mongodb');
require('dotenv').config();

let _db;
module.exports = {
  connectToServer(callback) {
    MongoClient.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true }, (err, db) => {
      _db = db;
      return callback(err);
    });
  },
  getDb() {
    return _db;
  },
};