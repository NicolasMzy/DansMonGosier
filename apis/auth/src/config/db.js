const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.POSTGRE_HOST || 'localhost',
  port: process.env.POSTGRE_PORT || '5432',
  username: process.env.POSTGRE_USERNAME,
  password: process.env.POSTGRE_PASSWORD,
  database: process.env.POSTGRE_DATABASE,
});

module.exports = sequelize;
