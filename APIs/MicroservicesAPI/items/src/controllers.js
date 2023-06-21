const itemsModel = require('./schema');

exports.createItem = async (req, res) => {
  try {
    const { id_restaurant, label, description, photo, price, type } = req.body;

    const newItem = new itemsModel({
      id_restaurant,
      label,
      description,
      photo,
      price,
      type
    });

    const savedItem = await newItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error creating a new item:', error);
    res.status(500).json({ message: 'Error creating a new item' });
  }
};

exports.getItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const item = await itemsModel.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error('Error retrieving item:', error);
    res.status(500).json({ message: 'Error retrieving item' });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { id_restaurant, label, description, photo, price, type } = req.body;

    const updatedItem = await itemsModel.findByIdAndUpdate(
      itemId,
      { id_restaurant, label, description, photo, price, type },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error('Error updating the item:', error);
    res.status(500).json({ message: 'Error updating the item' });
  }
};

exports.deleteItem = async (req, res) => {
    try {
        const itemId = req.params.itemId;

        await itemsModel.findByIdAndDelete(itemId);

        res.json({ message: 'Item successfully deleted' });
    } catch (error) {
        console.error('Error deleting item :', error);
        res.status(500).json({ message: 'Error deleting item' });
    }
};