const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  label: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['plat', 'boisson', 'sauce', 'accompagnement'], required: true },
});

const menuItemSchema = new mongoose.Schema({
  item: itemSchema,
  quantity: { type: Number, required: true }
});

const menuSchema = new mongoose.Schema({
  label: { type: String, required: true },
  description: { type: String, required: true },
  photo:  { type: String, required: true },
  price:  { type: Number, required: true },
  items: [menuItemSchema]
});

const orderedItemSchema = new mongoose.Schema({
  item: itemSchema,
  quantity: { type: Number, required: true }
});

const orderedMenuSchema = new mongoose.Schema({
  menu: menuSchema,
  quantity: { type: Number, required: true }
});

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
  menus: [orderedMenuSchema],
  items: [orderedItemSchema]
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;