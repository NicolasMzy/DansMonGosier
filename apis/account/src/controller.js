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

exports.getIdentityByCredentialsId = async (req, res) => {
  try {
    const {id_credentials} = req.params;

    const identity = await microservice.getIdentityByCredentialsId(id_credentials);

    if (identity.length === 0) {
      return res.status(404).json({error: 'Identity not found'});
    }

    res.status(200).json(identity);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server Error'});
  }
};

exports.createIdentity = async (req, res) => {
  try {
    const {
      first_name: firstName,
      last_name: lastName,
      id_credentials: idCredentials,
    } = req.body;

    const identity = await microservice.createIdentity({firstName, lastName, idCredentials});

    res.status(201).json(identity);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server Error'});
  }
};

exports.updateIdentity = async (req, res) => {
  try {
    const {id_credentials} = req.params;
    const {
      first_name: firstName,
      last_name: lastName,
    } = req.body;

    const identity = await microservice.updateIdentity(id_credentials, {firstName, lastName});

    if (identity[0] === 0) {
      return res.status(404).json({error: 'Identity not found'});
    }

    res.status(200).json({message: 'Identity updated successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server Error'});
  }
};

exports.deleteIdentity = async (req, res) => {
  try {
    const {id_credentials} = req.params;

    const identity = await microservice.deleteIdentity(id_credentials);

    if (identity === 0) {
      return res.status(404).json({error: 'Identity not found'});
    }

    res.status(204).end({message: 'Identity deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server Error'});
  }
};
