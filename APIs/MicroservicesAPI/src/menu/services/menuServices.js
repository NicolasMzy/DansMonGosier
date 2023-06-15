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

// exports.updateItem = async (itemId, name, description, price, type) => {
//   const updatedItem = await itemsModel.findByIdAndUpdate(
//     itemId,
//     { name, description, price, type },
//     { new: true }
//   );

//   return updatedItem;
// };

// exports.deleteItem = async (itemId) => {
//   await itemsModel.findByIdAndDelete(itemId);
// };