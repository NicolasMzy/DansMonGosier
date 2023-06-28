const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const accountRoutes = require('./route');

app.use(express.json());
app.use('/api', accountRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
