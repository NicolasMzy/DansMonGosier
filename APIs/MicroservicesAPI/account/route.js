const express = require('express');
const router = express.Router();

const controller = require('./controller');

// Create an account
router.post('/accounts', controller.createAccount);

// Get all accounts
router.get('/accounts', controller.getAllAccounts);

// Get an account by ID
router.get('/accounts/:id', controller.getUserById);

// Update an account
router.put('/accounts/:id', controller.updateAccount);

// Delete an account
router.delete('/accounts/:id', controller.deleteAccount);

module.exports = router;
