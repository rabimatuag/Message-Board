const messages =require('../db/messages')
exports.index=(req,res)=>{
    res.send('hello')
}
exports.getMessages=(req,res)=>{
    messages.getAll().then((messages) => {
        res.json(messages);
    });

}
exports.setMessages=(req,res)=>{
    

    messages.create(req.body).then((message) => {
        res.json(message);
        console.log(message)
    }).catch((error)=>{
        res.status(500);
        res.json(error);
    }); 
}