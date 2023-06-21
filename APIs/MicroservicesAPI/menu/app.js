const express = require('express');
const app = express();
const mongoose = require('mongoose');

const menuRoutes = require('./routes/menuRoutes');


app.use(express.json()) ;

app.use(menuRoutes);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use((req, res, next) => {
    console.log('Réception d\'une requête');
    next();
  });
  
  app.use((req, res, next) => {
    res.status(201);
    next();
  });
  
  app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !!!!' });
    next();
  });
  
  app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
  });
  
module.exports = app;

mongoose.connection.on('connected', function() {
  console.log("database is ready now");
});
mongoose.connection.on('disconnected', function() {
console.log("database is disconnected");
});


