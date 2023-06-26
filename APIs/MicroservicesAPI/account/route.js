const express = require('express');
const router = express.Router();

const controller = require('./controller');

// Create an account
router.post('/account', controller.createAccount);

// Authenticate
router.post('/login', controller.login);

// Get all accounts
router.get('/account', controller.getAllAccounts);

// Get an account by ID
router.get('/account/:id', controller.getUserById);

// Update an account
router.put('/account/:id', controller.updateAccount);

// Delete an account
router.delete('/account/:id', controller.deleteAccount);

module.exports = router;
