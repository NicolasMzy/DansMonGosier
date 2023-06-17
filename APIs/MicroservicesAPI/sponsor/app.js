const sequelize = require('./config/db')
const express = require('express');
const sponsorRoutes = require('./route');

const main = async () => {
  await sequelize.sync({ alter: true });
  
  const app = express();
  
  app.use(express.json());
  app.use('/sponsor', sponsorRoutes);
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
