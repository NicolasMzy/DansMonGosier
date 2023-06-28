const models = require('./models/index');

exports.getAll = async () => {
  const accounts = await models.Credentials.findAll();

  return accounts;
};

exports.get = async (accountId) => {
  const account = await models.Credentials.findAll({
    where: {
      id: accountId,
    },
  });

  return account;
};

exports.update = async (accountId, {email, phoneNb, password}) => {
  const account = models.Credentials.update(
      {
        email: email,
        phone_nb: phoneNb,
        pwd: password,
      },
      {
        where: {
          id: accountId,
        },
      },
  );

  return account;
};

exports.delete = async (accountId) => {
  const account = await models.Credentials.destroy({
    where: {
      id: accountId,
    },
  });

  return account;
};
