const express = require('express');
const router = express.Router();

const addressController = require('./controllers'); 

// Address
router.post('/address', addressController.createAddress);
router.get('/address/:addressId', addressController.getAddress);
router.put('/address/:addressId', addressController.updateAddress);
router.delete('/address/:addressId', addressController.deleteAddress);

router.get('/address-by-credentials/:id_credentials', addressController.getAddressByIdCredentials);

module.exports = router;