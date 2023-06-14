const createNewItem = require('../services/items/items');

exports.searchById = (req, res) => {
    const id = req.params.id
    res.send(`Id found : ${id}`)
}

exports.createItem = async (req, res) => {
  try {
    const { name, description, price, type } = req.body;

    const savedItem = await createNewItem(name, description, price, type);

    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Erreur lors de la création d\'un nouvel item :', error);
    res.status(500).json({ message: 'Erreur lors de la création d\'un nouvel item' });
  }
};