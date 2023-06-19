const sequelize = require('./config/db');
const models = require('./models/index');

exports.create = async (email, phoneNb, password, userType) => {
    await sequelize.sync();

    await models.Credentials.create(
        { 
            email: email,
            phone_nb: phoneNb,
            pwd: password,
            user_type: userType,
        }
    );
};
