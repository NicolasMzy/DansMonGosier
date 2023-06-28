const models = require('./models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = async (email, phoneNb, password, userType) => {
  password = bcrypt.hashSync(password, 10);
  await models.Credentials.create(
      {
        email: email,
        phone_nb: phoneNb,
        pwd: password,
        user_type: userType,
      },
  );
};

exports.login = async (email, password) => {
  let account = await models.Credentials.findAll({
    where: {
      email: email,
    },
  });

  if (account.length == 0) {
    res.status(401).json({error: 'invalid email'});
  }

  account = account[0].dataValues;
  const passwordCheck = bcrypt.compareSync(password, account.pwd);
  if (!passwordCheck) {
    throw new Error('Invalid password');
  }

  const data = {
    id: account.id,
    userType: account.user_type,
  };
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});

  return {id: account.id, token: token};
};
