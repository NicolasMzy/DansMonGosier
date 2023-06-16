const mongoose = require('mongoose');
const connectToMongoDB = require('../mongodb_connexion');
connectToMongoDB("orders")

const orderSchema = new mongoose.Schema({
  id_user: { type: String, required: true },
  id_restaurant: { type: String, required: true },
  order_number: { type: String, required: true },
  order_payment: { type: String, enum: ['paid','unpaid'], required: true },
  order_status: { type: String, enum: ['ordering', 'accepted_order', 'accepted_delivery', 'delivered', 'refused'], required: true },
  order_date: { type: String, required: true },
  order_address: { type: String, required: true },
  deliverer: { type: String, require: true },
  order_details: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      type: { type: String, enum: ['item','menu'], required: true },
      quantity: { type: Number, required: true },
    }
  ],
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;