const Restaurant = require('../models/schema'); 

exports.addRateToRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  const { id_user, rate, comment } = req.body;

  if (!id_user || !rate || !comment) {
    return res.status(400).json({ message: 'Missing required fields: id_user, rate, comment' });
  }

  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const newRate = {
      id_user,
      rate,
      comment,
      date: new Date()
    };

    restaurant.rates.push(newRate);

    // Update mean_rate
    let totalRate = 0;
    for (let i = 0; i < restaurant.rates.length; i++) {
      totalRate += restaurant.rates[i].rate;
    }
    restaurant.mean_rate = totalRate / restaurant.rates.length;

    await restaurant.save();

    return res.status(200).json({ message: 'Rate added successfully', restaurant });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};