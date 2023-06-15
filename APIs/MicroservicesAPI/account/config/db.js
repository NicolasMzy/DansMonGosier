const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gosier',
  password: 'gosier',
  database: 'dmg',
});

module.exports = sequelize;
