require('dotenv').config();

const utils = require('./utils');
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes');

const main = async () => {
  utils.dbTest();

  const app = express();

  app.use(cors({
    origin: '*',
  }), express.json());
  app.use('/', authRoutes);

  const PORT = process.env.MICROSERVICE_AUTH_PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();

