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

exports.getIdentityByCredentialsId = async (idCredentials) => {
  const identity = await models.Identity.findAll({
    where: {
      id_credentials: idCredentials,
    },
  });

  return identity;
};

exports.createIdentity = async ({firstName, lastName, idCredentials}) => {
  const identity = await models.Identity.create({
    first_name: firstName,
    last_name: lastName,
    id_credentials: idCredentials,
  });

  return identity;
};

exports.updateIdentity = async (idCredentials, {firstName, lastName}) => {
  const identity = await models.Identity.update(
      {
        first_name: firstName,
        last_name: lastName,
      },
      {
        where: {
          id_credentials: idCredentials,
        },
      },
  );

  return identity;
};

exports.deleteIdentity = async (idCredentials) => {
  const identity = await models.Identity.destroy({
    where: {
      id_credentials: idCredentials,
    },
  });

  return identity;
};

