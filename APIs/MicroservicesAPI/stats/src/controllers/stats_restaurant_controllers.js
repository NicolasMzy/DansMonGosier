const axios = require('axios');
const moment = require('moment');
const RestaurantSalesStatsModel = require('../models/schema'); 

exports.postRestaurantMonthlySalesStats = async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;
  
      // Fetch all delivered orders for the restaurant
      const response = await axios.get(`http://localhost:3012/orders/status/delivered/restaurant/${restaurantId}`);
  
      const orders = response.data;
  
      // Group orders by month
      let monthlySales = {};
      orders.forEach(order => {
        const month = moment(order.date.start).startOf('month').format('YYYY-MM');
        if (!monthlySales[month]) {
          monthlySales[month] = { sales: 0 };
        }
        monthlySales[month].sales += 1;
      });
  
      // Convert to array format for storage
      monthlySales = Object.keys(monthlySales).map(month => ({
        month,
        sales: monthlySales[month].sales
      }));
  
      // Check if stats for this restaurant already exist
      let restaurantSalesStats = await RestaurantSalesStatsModel.findOne({ id_restaurant: restaurantId });
  
      if (restaurantSalesStats) {
        // Update existing stats
        restaurantSalesStats.monthlySales = monthlySales;
        await restaurantSalesStats.save();
      } else {
        // Create new stats
        restaurantSalesStats = new RestaurantSalesStatsModel({
          id_restaurant: restaurantId,
          monthlySales
        });
        await restaurantSalesStats.save();
      }
  
      res.status(201).json(restaurantSalesStats);
    } catch (error) {
      console.error('Error while posting restaurant sales stats:', error);
      res.status(500).json({ message: 'Error while posting restaurant sales stats' });
    }
  };