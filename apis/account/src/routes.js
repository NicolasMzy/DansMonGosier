const express = require('express');
const router = express.Router();

const controller = require('./controller');

// Credential
router.get('/account', controller.getAllAccounts);
router.get('/account/:id', controller.getUserById);
router.put('/account/:id', controller.updateAccount);
router.delete('/account/:id', controller.deleteAccount);

// Identity
router.get('/identity/:id_credentials', controller.getIdentityByCredentialsId);
router.post('/identity', controller.createIdentity);

module.exports = router;
