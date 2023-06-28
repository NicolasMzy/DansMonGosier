const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Sponsor extends Model {}

Sponsor.init(
  {
    bonus: {
      type: DataTypes.INTEGER,
    },
    progress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_sponsor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_sponsored: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Sponsor',
    tableName: 'sponsor',
    timestamps: false,
  }
);

module.exports = Sponsor;
