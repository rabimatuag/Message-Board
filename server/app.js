const express = require('express');
const cors =require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app =express();

const indexRouter =require('./routes/indexRouter');

//middlewares
app.use(morgan('tiny')); //log all incoming request
app.use(cors()); //client talk to front-end
app.use(bodyParser.json()); //parsing json 

app.use('/',indexRouter);
app.listen(process.env.PORT||3000,()=>{
    console.log('your application is running:');
})

