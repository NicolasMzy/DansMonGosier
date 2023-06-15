import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432, // default PostgreSQL port
  username: 'gosier',
  password: 'gosier',
  database: 'dmg',
});

export default sequelize;