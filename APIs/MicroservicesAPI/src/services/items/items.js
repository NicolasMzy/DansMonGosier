const express = require('express')
const router = express.Router();
const itemsModel = require('../../models/mongodb/schemaItems');

router.get('/', function(req, res, next) {
    res.status(200).json({ response: true });
});

router.post('/createItem', async (req, res) => {
  try {
    const { name, description, price, type } = req.body;

    // Create a new item instance with data from the query body
    const newItem = new itemsModel({
      name,
      description,
      price,
      type,
    });

    // Save the new item in the database
    const savedItem = await newItem.save();

    // Send a reply with the newly created item
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Erreur lors de l\'ajout d\'un nouvel item :', error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout d\'un nouvel item' });
  }
});

module.exports = router;
