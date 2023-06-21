const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orderControllers'); 

// Create Order
router.post('/orders', ordersController.createOrder);

// Get Order by ID 
router.get('/orders/:orderId', ordersController.getOrder);

// Update Order by ID
router.put('/orders/:orderId', ordersController.updateOrder);

// Delete Order by ID
router.delete('/orders/:orderId', ordersController.deleteOrder);


module.exports = router;