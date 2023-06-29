const express = require('express');
const router = express.Router();

const orderController = require('./controllers'); 

// Order
router.post('/order', orderController.createOrder);
router.get('/order/:orderId', orderController.getOrder);
router.put('/order/:orderId', orderController.updateOrder);
router.delete('/order/:orderId', orderController.deleteOrder);

router.get('/order/status/:status/', orderController.getAllOrdersByStatus);
router.get('/order/delivered/user/:userId', orderController.getDeliveredOrdersByUser);
router.get('/order/status/:status/restaurant/:restaurantId', orderController.getOrdersByStatusAndRestaurant);
router.get('/ordersAll/', orderController.getAllOrders);
router.get('/orderExclude/', orderController.getOrdersExcludeStatuses);



module.exports = router;