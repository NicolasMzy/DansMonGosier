const express = require('express');
const router = express.Router();

const menusController = require('../controllers/menuControllers'); 


router.post('/menus', menusController.createMenus);

router.get('/menus/:menuId', menusController.getMenu);

router.put('/menus/:menuId', menusController.updateMenu);

router.delete('/menus/:menuId', menusController.deleteMenu);


module.exports = router;