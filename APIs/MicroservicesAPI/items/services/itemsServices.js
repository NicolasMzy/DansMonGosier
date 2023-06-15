const itemsModel = require('../models/itemsSchema'); 

exports.getItemsService = async (type, price, name, id) => {
  const filter = {};
  if (type) {
    filter.type = type;
  }
  if (price) {
    const numericPrice = parseInt(price);
    if (!isNaN(numericPrice)) {
      filter.price = numericPrice;
    }
  }
  if (name) {
    filter.name = name;
  }
  if (id) {
    filter._id = id;
  }
  const items = await itemsModel.find(filter);
  return items;
}

exports.createNewItem = async (name, description, price, type) => {
  const newItem = new itemsModel({
    name,
    description,
    price,
    type,
  });
  const savedItem = await newItem.save();
  return savedItem;
}

exports.updateItem = async (itemId, name, description, price, type) => {
  const updatedItem = await itemsModel.findByIdAndUpdate(
    itemId,
    { name, description, price, type },
    { new: true }
  );

  return updatedItem;
};

exports.deleteItem = async (itemId) => {
  await itemsModel.findByIdAndDelete(itemId);
};