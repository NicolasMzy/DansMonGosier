const microservice = require('./microservice');

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await microservice.getAll();
    res.status(200).json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server Error'});
  }
};

exports.getUserById = async (req, res) => {
  try {
    const {id} = req.params;

    const account = await microservice.get(id);

    if (account.length === 0) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(200).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server Error'});
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const {id} = req.params;
    const {
      email: email,
      phone_nb: phoneNb,
      pwd: password,
    } = req.body;

    const account = await microservice.update(id, {email, phoneNb, password});

    if (account.length === 0) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(200).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server Error'});
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const {id} = req.params;

    const account = await microservice.delete(id);

    if (account.length === 0) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server Error'});
  }
};

