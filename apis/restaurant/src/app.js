const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Import Swagger dependencies
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// Import routes
const routes = require('./routes');

// // Load Swagger YAML document
// const swaggerDocument = YAML.load('./swagger.yaml');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connexion MongoDB Collection
const connectToMongoDB = require('./mongodb_connection');
connectToMongoDB(process.env.COLLECTION)

// Server Express set PORT 
app.set('port', process.env.MICROSERVICE_RESTAURANT_PORT);
const server = http.createServer(app);

// Middleware for handling JSON requests
app.use(express.json());

// Middleware for handling CORS headers
app.use(cors({
  origin: '*'
}));

// Use routes 
app.use(routes);

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

server.listen(process.env.MICROSERVICE_RESTAURANT_PORT, () => {
  console.log(`Server is running on port ${app.get('port')}`);
});