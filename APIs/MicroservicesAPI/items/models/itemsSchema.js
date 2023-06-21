const mongoose = require('mongoose');
const connectToMongoDB = require('../mongodb_connexion');
connectToMongoDB("items")

const itemsSchema = new mongoose.Schema({
  id_restaurant:  { type: String, required: true },
  label: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['plat', 'boisson', 'sauce', 'accompagnement'], required: true },
});

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = itemsModel;


