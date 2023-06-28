const express = require('express');
const router = express.Router();

const restaurantStatsController = require('./controllers/stats_restaurant_controllers'); 

// Stats Restaurant
router.post('/restaurant-stats-monthly_sales/:restaurantId', restaurantStatsController.postRestaurantMonthlySalesStats);


module.exports = router;
