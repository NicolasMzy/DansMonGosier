const sequelize = require('./config/db');
const models = require('./models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.create = async (email, phoneNb, password, userType) => {
    await sequelize.sync();
    pwd = bcrypt.hashSync(password, 10);
    await models.Credentials.create(
        { 
            email: email,
            phone_nb: phoneNb,
            pwd: pwd,
            user_type: userType,
        }
    );
};

exports.login = async (email, password) => {
    var account = await models.Credentials.findAll({
        where: {
            email: email
        }
    });
    if (account.length == 0 || !bcrypt.compareSync(password, account[0].dataValues.pwd)) {
        return false;
    }
    
    account = account[0].dataValues;
    const data = {
        id: account.id,
        email: account.email,
        userType: account.user_type
    };
    const token = jwt.sign(data, 'your_secret_key', { expiresIn: '1h' });

    return token;
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
