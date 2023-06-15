const menuService = require('../services/menuServices');



exports.createMenus = async (req, res) => {
  try {
    const { name, description, price_menu, id_restaurant, items} = req.body;

    const savedMenu = await menuService.createNewMenu(name, description, price_menu, id_restaurant, items);
    
    res.status(201).json(savedMenu);
  } catch (error) {
    console.error('Erreur lors de la création d\'un nouvel item :', error);
    res.status(500).json({ message: 'Erreur lors de la création d\'un nouvel item' });
  }
};

// exports.updateItem = async (req, res) => {
//     try {
//       const itemId = req.params.itemId;
//       const { name, description, price, type } = req.body;
  
//       const updatedItem = await itemsService.updateItem(itemId, name, description, price, type);
  
//       res.json(updatedItem);
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour de l\'item :', error);
//       res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'item' });
//     }
//   };
  

// exports.deleteItem = async (req, res) => {
//     try {
//         const itemId = req.params.itemId;

//         await itemsService.deleteItem(itemId);

//         res.json({ message: 'Item supprimé avec succès' });
//     } catch (error) {
//         console.error('Erreur lors de la suppression de l\'item :', error);
//         res.status(500).json({ message: 'Erreur lors de la suppression de l\'item' });
//     }
// };