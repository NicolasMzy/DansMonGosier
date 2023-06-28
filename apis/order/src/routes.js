const express = require('express');
const router = express.Router();

const orderController = require('./controllers'); 

// Order
router.post('/orders', orderController.createOrder);
router.get('/orders/:orderId', orderController.getOrder);
router.put('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);

router.get('/orders/delivered/user/:userId', orderController.getDeliveredOrdersByUser);
router.get('/orders/status/:status/restaurant/:restaurantId', orderController.getOrdersByStatusAndRestaurant);


module.exports = router;