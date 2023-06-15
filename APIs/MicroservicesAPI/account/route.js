const express = require('express');
const router = express.Router();

const controller = require('./controller');

// Create a user
router.post('/accounts', controller.createAccount);

// Get all users
router.get('/accounts', controller.getAllAccounts);

// Get a user by ID
router.get('/accounts/:id', controller.getUserById);

// Update a user
// router.put('/users/:id', controller.updateUser);

// Delete a user
// router.delete('/users/:id', controller.deleteUser);

module.exports = router;
