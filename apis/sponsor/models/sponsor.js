const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

/**
 * @Classdesc Sponsor model
 */
class Sponsor extends Model {}

Sponsor.init(
    {
      bonus: {
        type: DataTypes.STRING,
      },
      progress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_sponsor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      id_sponsored: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Sponsor',
      tableName: 'sponsor',
      timestamps: false,
    },
);

module.exports = Sponsor;
