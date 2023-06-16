const mongoose = require('mongoose');
const connectToMongoDB = require('../mongodb_connexion');
connectToMongoDB("orders")

const orderSchema = new mongoose.Schema({
  id_user: { type: String, required: true },
  id_restaurant: { type: String, required: true },
  price: { type: Number, required: true },
  number: { type: String, required: true },
  payment: { type: String, enum: ['paid','unpaid'], required: true },
  status: { type: String, enum: ['ordering', 'accepted_order', 'accepted_delivery', 'delivered', 'refused_order', 'refused_delivery'], required: true },
  date: {
    start: { type: Date, required: true },
    end: { type: Date, required: false },
  },
  address: { type: String, required: true },
  deliverer: { type: String, required: true },
  menus: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  items: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      quantity: { type: Number, required: true },
    }
  ],
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;