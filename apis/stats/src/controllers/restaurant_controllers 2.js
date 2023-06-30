const axios = require('axios');
const moment = require('moment');
const RestaurantSalesStatsModel = require('../models/restaurant_schema'); 

exports.postRestaurantMonthlySalesStats = async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;
      const response = await axios.get(`http://localhost:3012/orders/status/delivered/restaurant/${restaurantId}`);
  
      const orders = response.data;
  
      let monthlySales = {};
      orders.forEach(order => {
        const month = moment(order.date.start).startOf('month').format('YYYY-MM');
        if (!monthlySales[month]) {
          monthlySales[month] = { sales: 0 };
        }
        monthlySales[month].sales += 1;
      });
  
      monthlySales = Object.keys(monthlySales).map(month => ({
        month,
        sales: monthlySales[month].sales
      }));
  
      let restaurantSalesStats = await RestaurantSalesStatsModel.findOne({ id_restaurant: restaurantId });
  
      if (restaurantSalesStats) {
        restaurantSalesStats.monthlySales = monthlySales;
        await restaurantSalesStats.save();
      } else {
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