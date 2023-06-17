const sequelize = require('./config/db');
const models = require('./models/index');

exports.create = async (email, phoneNb, password, userType) => {
    await models.Credentials.create(
        { 
            email: email,
            phone_nb: phoneNb,
            pwd: password,
            user_type: userType,
        }
    );
};

exports.getAll = async () => {
    await sequelize.sync();

    const accounts = await models.Credentials.findAll();

    return accounts;
};

exports.get = async (accountId) => {
    await sequelize.sync();

    const account = await models.Credentials.findAll({
        where: {
            id: accountId
        }
    });

    return account;
};

exports.update = async (accountId, { email, phoneNb, password }) => {
    await sequelize.sync();

    const account = models.Credentials.update(
        {
            email: email,
            phone_nb: phoneNb,
            pwd: password,
        },
        {
            where: {
                id: accountId
            }
        }
    );

    return account;
};

exports.delete = async (accountId) => {
    await sequelize.sync();

    const account = await models.Credentials.destroy({
        where: {
            id: accountId
        }
    });

    return account;
};
