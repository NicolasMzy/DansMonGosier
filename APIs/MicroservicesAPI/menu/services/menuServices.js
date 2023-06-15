const menusModel = require('../models/menuSchema'); 

exports.createNewMenu = async (name, description, price_menu, id_restaurant, items) => {
  const newMenus = new menusModel({
    name, 
    description, 
    price_menu, 
    id_restaurant, 
    items
  });

  const newMenu = await newMenus.save();
  return newMenu;
}

exports.getMenuById = async (menuId) => {
  const menu = await menusModel.findById(menuId);
  return menu;
};

