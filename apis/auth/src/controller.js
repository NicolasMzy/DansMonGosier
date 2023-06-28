const microservice = require('./microservice');

exports.register = async (req, res) => {
  try {
    const {
      email: email,
      phone_nb: phoneNb,
      pwd: password,
      user_type: userType,
    } = req.body;

    await microservice.create(email, phoneNb, password, userType);
    res.status(201).json('Registration successful');
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error while registering your informations'});
  }
};

exports.login = async (req, res) => {
  try {
    const {email: email, pwd: password} = req.body;
    const token = await microservice.login(email, password);

    res.status(202).json({
      message: 'Login successful',
      authorization: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Login failed'});
  }
};


