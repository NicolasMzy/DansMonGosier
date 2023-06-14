const itemsModel = require('../../models/mongodb/itemsSchema'); 

const createNewItem = async (name, description, price, type) => {
  const newItem = new itemsModel({
    name,
    description,
    price,
    type,
  });

  const savedItem = await newItem.save();

  return savedItem;
}

module.exports = createNewItem;