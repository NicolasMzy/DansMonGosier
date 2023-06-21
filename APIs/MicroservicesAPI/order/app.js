const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Import Swagger dependencies
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// Import routes
const orderRoutes = require('./routes');

// Load Swagger YAML document
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware for handling JSON requests
app.use(express.json());

// Use routes for items
app.use(orderRoutes);

// Middleware for handling CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Middleware for logging request reception
app.use((req, res, next) => {
  console.log('Received a request');
  next();
});

// Middleware for setting response status to 201 (Created)
app.use((req, res, next) => {
  res.status(201);
  next();
});

// Middleware for sending JSON response
app.use((req, res, next) => {
  res.json({ message: 'Your request has been received successfully!' });
  next();
});

// Middleware for logging response sent
app.use((req, res, next) => {
  console.log('Response sent successfully!');
});

// Export the application
module.exports = app;

// Database event handling
mongoose.connection.on('connected', function() {
  console.log("Database is ready");
});
mongoose.connection.on('disconnected', function() {
  console.log("Database is disconnected");
});