const menuService = require('../services/menuServices');
const menusModel = require('../models/menuSchema'); 

exports.createMenus = async (req, res) => {
  try {
    const { name, description, price_menu, id_restaurant, items} = req.body;

    const savedMenu = await menuService.createNewMenu(name, description, price_menu, id_restaurant, items);
    
    res.status(201).json(savedMenu);
  } catch (error) {
    console.error('Error when creating a new menu :', error);
    res.status(500).json({ message: 'Error when creating a new menu' });
  }
};

exports.getMenu = async (req, res) => {
  try {
    const menuId = req.params.menuId;

    const menu = await menuService.getMenuById(menuId);

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
    const { name, description, price_menu, items } = req.body;
    const menuId = req.params.menuId;

    const updatedMenu = await menusModel.findByIdAndUpdate(
      menuId,
      { name, description, price_menu, items },
      { new: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: 'Menu non trouvé' });
    }

    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du menu :', error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du menu' });
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

