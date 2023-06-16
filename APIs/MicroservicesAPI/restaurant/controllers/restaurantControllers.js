const restaurantModel = require('../models/restaurantSchema'); 

exports.createRestaurant = async (req, res) => {
  try {
    const {id_credentials,name,photo,schedule,id_address,menus,items } = req.body;

    const newRestaurant = new restaurantModel({
      id_credentials,
      name,
      photo,
      schedule,
      id_address,
      menus,
      items
    });

    const savedRestaurant = await newRestaurant.save();

    res.status(201).json(savedRestaurant);
  } catch (error) {
    console.error('Error while creating a new restaurant:', error);
    res.status(500).json({ message: 'Error while creating a new restaurant' });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;

    const restaurant = await restaurantModel.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    console.error('Error while retrieving the restaurant:', error);
    res.status(500).json({ message: 'Error while retrieving the restaurant' });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const updates = req.body;

    const updatedRestaurant = await restaurantModel.findByIdAndUpdate(restaurantId, updates, { new: true });

    if (!updatedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.error('Error while updating the restaurant:', error);
    res.status(500).json({ message: 'Error while updating the restaurant' });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;

    const deletedRestaurant = await restaurantModel.findByIdAndDelete(restaurantId);

    if (!deletedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error('Error while deleting the restaurant:', error);
    res.status(500).json({ message: 'Error while deleting the restaurant' });
  }
};

