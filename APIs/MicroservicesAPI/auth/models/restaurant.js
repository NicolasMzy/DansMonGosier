const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Restaurant extends Model {}

Restaurant.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    business_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    id_credentials: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Restaurant',
    tableName: 'restaurant',
    timestamps: false,
  }
);

module.exports =  Restaurant;
