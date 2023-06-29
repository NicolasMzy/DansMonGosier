require('dotenv').config();

const sequelize = require('./config/db');
const express = require('express');
const sponsorRoutes = require('./route');
const cors = require('cors');

const main = async () => {
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // Database connection testing
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      await sequelize.sync();

      // If the database sync succeeds, break out of the loop
      break;
    } catch (error) {
      console.log(`Attempt ${attempt} failed with error:`, error);

      if (attempt === 5) {
        console.log('All attempts failed. Exiting...');
        // If it's the fifth attempt, log the error and terminate the program
        return;
      }

      // If it's not the fifth attempt, wait for 5 seconds before retrying
      console.log('Retrying in 5 seconds...');
      await delay(5000);
    }
  }

  const app = express();

  app.use(cors({
    origin: '*',
  }));
  app.use(express.json());

  app.use('/sponsor', sponsorRoutes);

  const PORT = process.env.MICROSERVICE_SPONSOR_PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();

