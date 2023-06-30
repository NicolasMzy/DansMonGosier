const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

/**
 * @Classdesc Identity model
 */
class Identity extends Model {}

Identity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_credentials: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'AppUser',
      tableName: 'app_user',
      timestamps: false,
    },
);

module.exports = Identity;
