require('dotenv').config();

const express = require('express');
const cors = require('cors');

const middleware = require('./verify');

const main = async () => {
  const app = express();

  app.use(cors({
    origin: '*',
  }), express.json(), middleware.verifyToken);

  const PORT = process.env.MIDDLEWARE_AUTH_PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();

