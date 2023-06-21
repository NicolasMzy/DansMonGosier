const express = require('express');
const router = express.Router();

const menusController = require('../controllers/menuControllers'); 

// Create Menu
router.post('/menus', menusController.createMenus);

// Get Menu by ID 
router.get('/menus/:menuId', menusController.getMenu);

// Update Menu by ID
router.put('/menus/:menuId', menusController.updateMenu);

// Delete Menu by ID
router.delete('/menus/:menuId', menusController.deleteMenu);


module.exports = router;