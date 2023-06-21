const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  id_restaurant:  { type: String, required: true },
  label: { type: String, required: true },
  description: { type: String, required: true },
  photo:  { type: String, required: true },
  price:  { type: Number, required: true },
  items: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: 'items', required: true },
      quantity: { type: Number, required: true },
    }
  ],
});

const menuModel = mongoose.model('menus', menuSchema);

module.exports = menuModel;
