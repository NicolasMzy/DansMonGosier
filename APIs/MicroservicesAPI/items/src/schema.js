const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  label: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['plat', 'boisson', 'sauce', 'accompagnement'], required: true },
});

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = itemsModel;