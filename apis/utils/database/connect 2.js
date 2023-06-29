const postgre = require('../../config/sequelize');

async function main() {
  try {
    await postgre.authenticate();
    console.log('Connection has been established successfully.');

    // Start using your models and perform database operations here

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
