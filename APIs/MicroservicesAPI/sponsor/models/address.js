const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Address extends Model {}

Address.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    line_1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    line_2: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postcode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Address',
    tableName: 'adress',
    timestamps: false,
  }
);

module.exports = Address;
