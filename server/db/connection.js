const db = require('monk')('localhost/mydb')
const monk = require('monk');
const connectionString = process.env.MONGODB_URI||'localhost:27017/messageboard';
//const db = monk('localhost:27017/messageboard'); //invoking conection string to monk module

module.exports=db;