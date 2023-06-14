const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/itemsControllers'); 


router.post('/items', itemsController.createItem);


module.exports = router;