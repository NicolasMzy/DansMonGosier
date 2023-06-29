const mongoose = require('mongoose');

const monthlyOrderSchema = new mongoose.Schema({
  month: { type: String, required: true },
  totalOrders: { type: Number, default: 0 }
});

const commercialStatsSchema = new mongoose.Schema({
  monthlyOrders: [monthlyOrderSchema]
});

module.exports = mongoose.model('stats_commercials', commercialStatsSchema);