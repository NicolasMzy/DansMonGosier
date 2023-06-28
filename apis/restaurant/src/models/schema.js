const mongoose = require('mongoose');

const dayScheduleSchema = new mongoose.Schema({
  start: { 
    type: String, 
    required: true, 
    match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ // Regex to match HH:MM format
  },
  end: { 
    type: String, 
    required: true, 
    match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ // Regex to match HH:MM format
  }
});

const rateSchema = new mongoose.Schema({
  id_user: { type: Number, required: true },
  rate: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: true }
});

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

const restaurantSchema = new mongoose.Schema({
  id_credentials: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true },
  schedule: {
    monday: dayScheduleSchema,
    tuesday: dayScheduleSchema,
    wednesday: dayScheduleSchema,
    thursday: dayScheduleSchema,
    friday: dayScheduleSchema,
    saturday: dayScheduleSchema,
    sunday: dayScheduleSchema
  },
  id_address: { type: String, required: true },
  category: { type: String, required: true },
  mean_rate: { type: Number, required: false },
  rates: [rateSchema],
  menus: [menuSchema],
  items: [itemSchema]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);