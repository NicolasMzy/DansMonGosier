const sequelize = require('../config/db');

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

exports.dbTest = async () => {
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      await sequelize.sync();

      break;
    } catch (error) {
      console.log(`Attempt ${attempt} failed with error:`, error);

      if (attempt === 5) {
        console.log('All attempts failed. Exiting...');

        return;
      }
      console.log('Retrying in 5 seconds...');
      await delay(5000);
    }
  }
};
