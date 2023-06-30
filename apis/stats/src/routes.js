const express = require('express');
const router = express.Router();

const restaurantStatsController = require('./controllers/restaurant_controllers'); 
const commercialStatsController = require('./controllers/commercial_controllers'); 

// Stats Restaurant
router.post('/stats/restaurant/monthly-sales/:restaurantId', restaurantStatsController.postRestaurantMonthlySalesStats);

// Stats Commercial
router.post('/stats/commercial/monthly-global-sales/', commercialStatsController.postCommercialMonthlyAllSalesStats);

module.exports = router;