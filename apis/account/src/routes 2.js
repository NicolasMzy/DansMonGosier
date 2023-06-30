const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/account', controller.getAllAccounts);
router.get('/account/:id', controller.getUserById);
router.put('/account/:id', controller.updateAccount);
router.delete('/account/:id', controller.deleteAccount);

module.exports = router;
