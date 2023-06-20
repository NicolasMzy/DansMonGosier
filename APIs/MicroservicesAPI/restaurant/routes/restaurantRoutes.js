const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/restaurantControllers'); 

// Create restaurant
router.post('/restaurants', restaurantsController.createRestaurant);

// Get restaurant by ID 
router.get('/restaurants/:restaurantId', restaurantsController.getRestaurant);

// Get restaurant by ID 
router.get('/restaurants-categories', restaurantsController.getRestaurantCategories);

// Update restaurant by ID
router.put('/restaurants/:restaurantId', restaurantsController.updateRestaurant);

// Delete restaurant by ID
router.delete('/restaurants/:restaurantId', restaurantsController.deleteRestaurant);


module.exports = router;