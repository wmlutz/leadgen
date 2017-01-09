"use strict";

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
  connect() {
    client.connect('mongodb://localhost:27017/leadgen-dev-001', function (err, db){
      if(err) {
        console.log("Error connecting to Mongo - check mongod connection");
        process.exit(1);
      }
      _db = db;
      console.log("Connected to Mongo");
    });
  },
  leads(){
    return _db.collection('leads');
  },
  campaigns(){
    return _db.collection('campaigns');
  },
  users(){
    return _db.collection('users');
  }
}
