const express = require('express');
const cors =require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const messages=require('./db/messages');


const app =express();


const indexRouter =require('./routes/indexRouter');
///
//
//


/*
// or
// const db = require('monk')('user:pass@localhost:port/mydb')
 
const users = db.get('users')
 
users.createIndex('name last')
users.insert({ name: 'Tobi', bigdata: {} })
/*users.find({ name: 'Loki' }, '-bigdata').then(function () {
  // exclude bigdata field
})
users.find({}, {sort: {name: 1}}).then(function () {
  // sorted by name field
})*/

//middlewares
app.use(morgan('tiny')); //log all incoming request
app.use(cors()); //client talk to front-end
app.use(bodyParser.json()); //parsing json 

app.use('/',indexRouter);
app.listen(process.env.PORT||3000,()=>{
    console.log('your application is running:3000');
})

module.exports=app;