const axios = require('axios');
const moment = require('moment');
const CommercialStatsModel = require('../models/commercial_schema'); 

exports.postCommercialMonthlyAllSalesStats = async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:3012/orders/status/delivered`);
    const orders = response.data;

    let monthlyOrders = {};
    orders.forEach(order => {
      const month = moment(order.date.start).startOf('month').format('YYYY-MM');
      if (!monthlyOrders[month]) {
        monthlyOrders[month] = { orders: 0 };
      }
      monthlyOrders[month].orders += 1;
    });

    monthlyOrders = Object.keys(monthlyOrders).map(month => ({
      month,
      totalOrders: monthlyOrders[month].orders
    }));

    const newCommercialStats = new CommercialStatsModel({
      monthlyOrders
    });
    const savedCommercialStats = await newCommercialStats.save();

    res.status(201).json(savedCommercialStats);
  } catch (error) {
    console.error('Error while posting commercial stats:', error);
    res.status(500).json({ message: 'Error while posting commercial stats' });
  }
};
