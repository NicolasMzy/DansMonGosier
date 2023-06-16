const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/itemsControllers'); 

// Create Item
router.post('/items', itemsController.createItem);

// Get Item by ID
router.get('/items/:itemId', itemsController.getItem);

// Update Item by ID
router.put('/items/:itemId', itemsController.updateItem);

// Delete Item by ID
router.delete('/items/:itemId', itemsController.deleteItem);


module.exports = router;