const itemsService = require('../services/items/itemsServices');
// const itemsModel = require('../../models/mongodb/itemsSchema');

exports.getItems = async (req, res) => {
    try {
      const { type, price, name, id } = req.query;
  
      const items = await itemsService.getItemsService(type, price, name, id);

      res.status(200).json(items);
    } catch (error) {
      console.error('Erreur lors de la récupération des items :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des items' });
    }
  };


exports.createItem = async (req, res) => {
  try {
    const { name, description, price, type } = req.body;

    const savedItem = await itemsService.createNewItem(name, description, price, type);

    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Erreur lors de la création d\'un nouvel item :', error);
    res.status(500).json({ message: 'Erreur lors de la création d\'un nouvel item' });
  }
};

exports.updateItem = async (req, res) => {
    try {
      const itemId = req.params.itemId;
      const { name, description, price, type } = req.body;
  
      const updatedItem = await itemsService.updateItem(itemId, name, description, price, type);
  
      res.json(updatedItem);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'item :', error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'item' });
    }
  };
  

exports.deleteItem = async (req, res) => {
    try {
        const itemId = req.params.itemId;

        await itemsService.deleteItem(itemId);

        res.json({ message: 'Item supprimé avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'item :', error);
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'item' });
    }
};