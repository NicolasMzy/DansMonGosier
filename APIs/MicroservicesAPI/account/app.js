const sequelize = require('./config/db')
const express = require('express');
const accountRoutes = require('./route');
const cors = require('cors');

const main = async () => {
  await sequelize.sync();
  
  const app = express();

  app.use(cors({
    origin: '*'
  }));

  app.use(express.json());

  app.use('/', accountRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
