const Restaurant = require('../models/schema'); 

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
    try {
      const restaurant = new Restaurant(req.body);
      await restaurant.save();
      res.status(201).json({ message: 'Restaurant created successfully', restaurant });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
};
  
// Get a specific restaurant
exports.getRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    try {
        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all restaurant categories
exports.getRestaurantCategories = async (req, res) => {
    try {
        const categories = await Restaurant.distinct('category');
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a specific restaurant
exports.updateRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(restaurantId, req.body, { new: true });
        if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json({ message: 'Restaurant updated successfully', restaurant });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a specific restaurant
exports.deleteRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    try {
        const restaurant = await Restaurant.findByIdAndDelete(restaurantId);
        if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get top 10 rated restaurants
exports.getTopRatedRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant
            .find()
            .sort({ mean_rate: -1 })
            .limit(10);
        res.status(200).json({ restaurants });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

