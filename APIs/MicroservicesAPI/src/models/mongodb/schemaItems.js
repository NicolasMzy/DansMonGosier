const mongoose = require('mongoose');
const connectToMongoDB = require('../../utils/mongodb/mongodb_connexion');
connectToMongoDB("items")

const itemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['plat', 'boisson', 'sauce', 'accompagnement'], required: true },
});

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = itemsModel;