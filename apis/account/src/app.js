require('dotenv').config();

const utils = require('./utils');
const express = require('express');
const cors = require('cors');

const accountRoutes = require('./routes');

const main = async () => {
  utils.dbTest();

  const app = express();

  app.use(cors({
    origin: '*',
  }), express.json());
  app.use('/', accountRoutes);

  const PORT = process.env.MICROSERVICE_ACCOUNT_PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
