import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

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
    id_adress: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Credentials',
    tableName: 'credentials',
    timestamps: false,
  }
);

export default Credentials;
