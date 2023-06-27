const AddressModel = require('./schema'); 
const axios = require('axios');

exports.createAddress = async (req, res) => {
  try {
    const { id_credentials, type, line_1, line_2, city, country, postcode } = req.body;

    // Get the GPS coordinates from the Nominatim API
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        street: line_1,
        city,
        country,
        postalcode: postcode,
        format: 'json'
      }
    });

    // Check if the API returned a result
    if (!response.data || response.data.length === 0) {
      return res.status(400).json({ message: 'Could not find GPS coordinates for this address' });
    }

    // Get the first result
    const coordinates = [parseFloat(response.data[0].lon), parseFloat(response.data[0].lat)];

    const newAddress = new AddressModel({
      id_credentials,
      type,
      line_1,
      line_2,
      city,
      country,
      postcode,
      coordinates
    });

    const savedAddress = await newAddress.save();

    res.status(201).json(savedAddress);
  } catch (error) {
    console.error('Error while creating a new address:', error);
    res.status(500).json({ message: 'Error while creating a new address' });
  }
};


exports.getAddress = async (req, res) => {
  try {
    const addressId = req.params.addressId;

    const address = await AddressModel.findById(addressId);

    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json(address);
  } catch (error) {
    console.error('Error while retrieving the address:', error);
    res.status(500).json({ message: 'Error while retrieving the address' });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const addressId = req.params.addressId;
    const updates = req.body;

    const updatedAddress = await AddressModel.findByIdAndUpdate(addressId, updates, { new: true });

    if (!updatedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json(updatedAddress);
  } catch (error) {
    console.error('Error while updating the address:', error);
    res.status(500).json({ message: 'Error while updating the address' });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const addressId = req.params.addressId;

    const deletedAddress = await AddressModel.findByIdAndDelete(addressId);

    if (!deletedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    console.error('Error while deleting the address:', error);
    res.status(500).json({ message: 'Error while deleting the address' });
  }
};

