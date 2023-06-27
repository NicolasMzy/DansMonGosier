const AddressModel = require('./schema'); 

exports.createAddress = async (req, res) => {
  try {
    const { id_credentials,type,line_1,line_2,city,country,postcode } = req.body;

    const newAddress = new AddressModel({
      id_credentials,
      type,
      line_1,
      line_2,
      city,
      country,
      postcode
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

exports.getAddressByIdCredentials = async (req, res) => {
  try {
    const { id_credentials } = req.params;
    const address = await AddressModel.findOne({ id_credentials });

    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json(address);
  } catch (error) {
    console.error('Error while getting the address:', error);
    res.status(500).json({ message: 'Error while getting the address' });
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

