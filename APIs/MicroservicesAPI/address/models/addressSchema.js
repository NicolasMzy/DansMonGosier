const mongoose = require('mongoose');
const connectToMongoDB = require('../mongodb_connexion');
connectToMongoDB("addresses")

const addressSchema = new mongoose.Schema({
  id_credentials: { type: String, required: true },
  type: { type: String, enum: ['restaurant', 'client'], required: true },
  line_1: { type: String, required: true },
  line_2: { type: String },
  city: { type: String, required: true },
  country: { type: String, required: true },
  postcode: { type: String, required: true }
});

const addressModel = mongoose.model('addresses', addressSchema);

module.exports = addressModel;