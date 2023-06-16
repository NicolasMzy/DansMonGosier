const mongoose = require('mongoose');
const connectToMongoDB = require('../mongodb_connexion');
connectToMongoDB("restaurants")

const restaurantSchema = new mongoose.Schema({
  id_credentials: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true },
  schedule: { type: String, required: true },
  id_address: { type: String, required: true },
  menus: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'menus',
    required: true
  }],
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'items',
    required: true
  }]
});

const restaurantModel = mongoose.model('restaurants', restaurantSchema);

module.exports = restaurantModel;