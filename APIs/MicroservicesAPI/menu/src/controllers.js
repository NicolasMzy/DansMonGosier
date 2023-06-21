const menusModel = require('./schema'); 

exports.createMenus = async (req, res) => {
  try {
    const { id_restaurant, label, description, photo, price, items } = req.body;

    const newMenus = new menusModel({
      id_restaurant,
      label,
      description,
      photo,
      price,
      items
    });

    const savedMenu = await newMenus.save();

    res.status(201).json(savedMenu);
  } catch (error) {
    console.error('Error creating a new menu:', error);
    res.status(500).json({ message: 'Error creating a new menu' });
  }
};

exports.getMenu = async (req, res) => {
  try {
    const menuId = req.params.menuId;

    const menu = await menusModel.findById(menuId);

    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json(menu);
  } catch (error) {
    console.error('Error while retrieving menu:', error);
    res.status(500).json({ message: 'Error while retrieving menu' });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const { id_restaurant, label, description, photo, price, items } = req.body;
    const menuId = req.params.menuId;

    const updatedMenu = await menusModel.findByIdAndUpdate(
      menuId,
      { id_restaurant, label, description, photo, price, items },
      { new: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error('Error updating menu :', error);
    res.status(500).json({ message: 'Menu update error' });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const menuId = req.params.menuId;

    const deletedMenu = await menusModel.findByIdAndDelete(menuId);

    if (!deletedMenu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json({ message: 'Menu deleted successfully' });

  } catch (error) {
    console.error('Error while deleting the menu:', error);
    res.status(500).json({ message: 'Error while deleting the menu' });
  }
};

