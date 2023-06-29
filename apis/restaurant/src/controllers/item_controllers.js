const Restaurant = require('../models/schema');
// const dotenv = require('dotenv');
// dotenv.config();

 // Create a new item for a specific restaurant
exports.createItem = async (req, res) => {
  const { restaurantId } = req.params;
  const { label, description, photo, price, type } = req.body;

  if (!label || !description || !photo || !price || !type) {
    return res.status(400).json({ message: 'Missing required fields: label, description, photo, price, type' });
  }

  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const newItem = {
      label,
      description,
      photo,
      price,
      type
    };

    restaurant.items.push(newItem);

    await restaurant.save();

    return res.status(200).json({ message: 'Item added successfully', restaurant });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Get all items for a specific restaurant
exports.getItems = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json({ items: restaurant.items });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a specific item for a specific restaurant
exports.getItem = async (req, res) => {
  const { restaurantId, itemId } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const item = restaurant.items.id(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a specific item for a specific restaurant
exports.updateItem = async (req, res) => {
  const { restaurantId, itemId } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const item = restaurant.items.id(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    item.set(req.body);

    await restaurant.save();
    res.status(200).json({ message: 'Item updated successfully', item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a specific item for a specific restaurant
exports.deleteItem = async (req, res) => {
  const { restaurantId, itemId } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const item = restaurant.items.id(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    restaurant.items.pull(item);

    await restaurant.save();
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

