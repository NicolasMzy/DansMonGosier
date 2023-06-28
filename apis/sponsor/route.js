const express = require('express');
const router = express.Router();

const controller = require('./controller');

// Initiate a new sponsor
router.post('/', controller.newSponsor);

// Get a sponsor by account ID
router.get('/:id', controller.getSponsorByAccount);

// Update a sponsor
router.put('/:id', controller.updateSponsor);

// Delete a sponsor
router.delete('/:id', controller.deleteSponsor);

module.exports = router;
