const router = require('express').Router();
const homeController = require('../controllers/HomeController');
router.get('/',homeController.index);
router.get('/messages',homeController.getMessages)
router.post('/messages',homeController.setMessages);
module.exports=router;