const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/itemsControllers'); 


router.get('/items', itemsController.getItems);

router.post('/items', itemsController.createItem);

// PUT /items/:itemId
router.put('/items/:itemId', itemsController.updateItem);

// DELETE /items/:itemId
router.delete('/items/:itemId', itemsController.deleteItem);


module.exports = router;