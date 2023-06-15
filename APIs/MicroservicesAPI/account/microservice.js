const sequelize = require('./config/db');
const models = require('./models/index');

exports.create = async (email, phoneNumber, password, userType) => {
    await sequelize.sync();

    await models.Credentials.create(
        { 
            email: email,
            phone_nb: phoneNumber,
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


