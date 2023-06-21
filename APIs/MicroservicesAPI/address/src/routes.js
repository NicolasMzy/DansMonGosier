const express = require('express');
const router = express.Router();

const addressController = require('./controllers'); 

// Create address
router.post('/address', addressController.createAddress);

// Get address by ID 
router.get('/address/:addressId', addressController.getAddress);

// Update address by ID
router.put('/address/:addressId', addressController.updateAddress);

// Delete address by ID
router.delete('/address/:addressId', addressController.deleteAddress);


module.exports = router;