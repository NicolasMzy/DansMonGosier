const express = require('express');
const router = express.Router();

const restaurantController = require('./controllers/controllers'); 
const rateController = require('./controllers/rate_controllers'); 
const itemController = require('./controllers/item_controllers'); 

// Restaurant
router.post('/restaurants', restaurantController.createRestaurant);
router.get('/restaurants/:restaurantId', restaurantController.getRestaurant);
router.get('/restaurants-categories', restaurantController.getRestaurantCategories);
router.put('/restaurants/:restaurantId', restaurantController.updateRestaurant);
router.delete('/restaurants/:restaurantId', restaurantController.deleteRestaurant);
router.get('/restaurants-top-rated/', restaurantController.getTopRatedRestaurants);

// Rates
router.post('/restaurants/:restaurantId/rates', rateController.addRateToRestaurant);

// Items 
router.post('/restaurants/:restaurantId/items', itemController.createItem);
router.get('/restaurants/:restaurantId/items', itemController.getItems);
router.get('/restaurants/:restaurantId/items/:itemId', itemController.getItem);
router.put('/restaurants/:restaurantId/items/:itemId', itemController.updateItem);
router.delete('/restaurants/:restaurantId/items/:itemId', itemController.deleteItem);


module.exports = router;