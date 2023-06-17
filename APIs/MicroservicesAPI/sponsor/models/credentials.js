const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Credentials extends Model {}

Credentials.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    phone_nb: {
        type: DataTypes.STRING,
    },
    pwd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Credentials',
    tableName: 'credentials',
    timestamps: false,
  }
);

module.exports = Credentials;
