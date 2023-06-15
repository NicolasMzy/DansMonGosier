const mongoose = require('mongoose');
const connectToMongoDB = require('../mongodb_connexion');
connectToMongoDB("menus")

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price_menu:  { type: Number, required: true },
  id_restaurant:  { type: String, required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'items', required: true },
      quantity: { type: Number, required: true },
    }
  ],
});

const menuModel = mongoose.model('menus', menuSchema);

module.exports = menuModel;
