const Restaurant = require('../models/schema'); 
 
// Create a new menu for a specific restaurant
exports.createMenu = async (req, res) => {
  const { restaurantId } = req.params;
  const { label, description, photo, price } = req.body;

  if (!label || !description || !photo || !price) {
    return res.status(400).json({ message: 'Missing required fields: label, description, photo, price' });
  }

  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const newMenu = {
      label,
      description,
      photo,
      price,
      items: []
    };

    restaurant.menus.push(newMenu);

    await restaurant.save();

    return res.status(200).json({ message: 'Menu added successfully', restaurant });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Get all menus for a specific restaurant
exports.getMenus = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json({ menus: restaurant.menus });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a specific menu for a specific restaurant
exports.getMenu = async (req, res) => {
  const { restaurantId, menuId } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const menu = restaurant.menus.id(menuId);
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.status(200).json({ menu });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a specific menu for a specific restaurant
exports.updateMenu = async (req, res) => {
  const { restaurantId, menuId } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const menu = restaurant.menus.id(menuId);
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    menu.set(req.body);
    await restaurant.save();
    res.status(200).json({ message: 'Menu updated successfully', menu });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a specific menu for a specific restaurant
exports.deleteMenu = async (req, res) => {
  const { restaurantId, menuId } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const menu = restaurant.menus.id(menuId);
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    restaurant.menus.pull(menu);

    await restaurant.save();
    res.status(200).json({ message: 'Menu deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Add an item to a specific menu for a specific restaurant
exports.addItemToMenu = async (req, res) => {
  const { restaurantId, menuId } = req.params;
  const { label, description, photo, price, type, quantity } = req.body;

  if (!label || !description || !photo || !price || !type || !quantity) {
    return res.status(400).json({ message: 'Missing required fields: label, description, photo, price, type, quantity' });
  }

  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const menu = restaurant.menus.id(menuId);

    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    const newItem = {
      item: {
        label,
        description,
        photo,
        price,
        type
      },
      quantity
    };

    menu.items.push(newItem);

    await restaurant.save();

    return res.status(200).json({ message: 'Item added successfully', restaurant });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateMenuItem = async (req, res) => {
  const { restaurantId, menuId, itemId } = req.params;
  const { label, description, photo, price, type, quantity } = req.body;

  if (!label || !description || !photo || !price || !type || !quantity) {
    return res.status(400).json({ message: 'Missing required fields: label, description, photo, price, type, quantity' });
  }

  try {
    const restaurant = await Restaurant.findOne({ id_credentials: restaurantId });

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const menu = restaurant.menus.id(menuId);

    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    const menuItem = menu.items.id(itemId);

    if (!menuItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    menuItem.item.label = label;
    menuItem.item.description = description;
    menuItem.item.photo = photo;
    menuItem.item.price = price;
    menuItem.item.type = type;
    menuItem.quantity = quantity;

    await restaurant.save();

    return res.status(200).json({ message: 'Item updated successfully', restaurant });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};