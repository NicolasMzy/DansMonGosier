const express = require('express');
const router = express.Router();

const restaurantController = require('./controllers/restaurant_controllers'); 
const rateController = require('./controllers/rate_controllers'); 
const itemController = require('./controllers/item_controllers'); 
const menuController = require('./controllers/menu_controllers'); 

// Restaurant
router.get('/restaurant-topRated/', restaurantController.getTopRatedRestaurants);
router.post('/restaurant', restaurantController.createRestaurant);
router.get('/restaurant/:restaurantId', restaurantController.getRestaurant);
router.get('/restaurant/IDcredentials/:id_credentials', restaurantController.getRestaurantByIdCredentials);
router.put('/restaurant/:restaurantId', restaurantController.updateRestaurant);
router.delete('/restaurant/:restaurantId', restaurantController.deleteRestaurant);
router.get('/restaurant-categories', restaurantController.getRestaurantCategories);

// Rates
router.post('/restaurant/:restaurantId/rates', rateController.addRateToRestaurant);

// Items 
router.post('/restaurant/:restaurantId/items', itemController.createItem);
router.get('/restaurant/:restaurantId/items', itemController.getItems);
router.get('/restaurant/:restaurantId/items/:itemId', itemController.getItem);
router.put('/restaurant/:restaurantId/items/:itemId', itemController.updateItem);
router.delete('/restaurant/:restaurantId/items/:itemId', itemController.deleteItem);

// Menus
router.post('/restaurant/:restaurantId/menus', menuController.createMenu);
router.get('/restaurant/:restaurantId/menus', menuController.getMenus);
router.get('/restaurant/:restaurantId/menus/:menuId', menuController.getMenu);
router.put('/restaurant/:restaurantId/menus/:menuId', menuController.updateMenu);
router.delete('/restaurant/:restaurantId/menus/:menuId', menuController.deleteMenu);
// Items management into Menu
router.post('/restaurant/:restaurantId/menus/:menuId/items', menuController.addItemToMenu);
router.put('/restaurant/:restaurantId/menus/:menuId/menuItem/:menuItemId', menuController.updateMenuItem);

module.exports = router;