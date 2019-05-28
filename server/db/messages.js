const db = require('./connection');
const messages = db.get('messages');  //messages is model
const joi = require('joi');

const schema = joi.object().keys({
    username:joi.string().alphanum().required(),
    subject:joi.string().required(),
    messasge:joi.string().max(500).required(),
 imageURL:joi.string().uri({
        scheme:[
            /http?s/
    ]
    })

});

const getAll=()=>{
    return messages.find();
}
const create = (message)=>{
    if(!message.username) message.username ='Anonymous';
    const result = joi.validate(message,schema);
    if(result.error== null){
      //  message.created = new Date();
        return messages.insert(message);
    }else{
        return Promise.reject(result.eror)

    }
    
}
module.exports={
    getAll,
    create

};


