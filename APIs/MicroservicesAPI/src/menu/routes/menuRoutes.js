const express = require('express');
const router = express.Router();

const menusController = require('../controllers/menuControllers'); 


router.post('/menus', menusController.createMenus);


module.exports = router;