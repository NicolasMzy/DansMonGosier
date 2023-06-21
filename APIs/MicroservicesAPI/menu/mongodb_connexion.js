const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://math4fpv:tGJRpkHkKSjPp2Bf@mongosier.zhj1puu.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion à MongoDB réussie');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB :', error);
  }
};

module.exports = connectToMongoDB;
