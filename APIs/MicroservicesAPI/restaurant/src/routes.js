const express = require('express');
const router = express.Router();

const restaurantController = require('./controllers/restaurant_controllers'); 
const rateController = require('./controllers/rate_controllers'); 
const itemController = require('./controllers/item_controllers'); 
const menuController = require('./controllers/menu_controllers'); 

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

// Menus
router.post('/restaurants/:restaurantId/menus', menuController.createMenu);
router.get('/restaurants/:restaurantId/menus', menuController.getMenus);
router.get('/restaurants/:restaurantId/menus/:menuId', menuController.getMenu);
router.put('/restaurants/:restaurantId/menus/:menuId', menuController.updateMenu);
router.delete('/restaurants/:restaurantId/menus/:menuId', menuController.deleteMenu);
// Add an item to a specific menu for a specific restaurant
router.post('/restaurants/:restaurantId/menus/:menuId/items', menuController.addItemToMenu);


module.exports = router;