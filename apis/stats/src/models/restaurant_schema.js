const mongoose = require('mongoose');

const monthlySalesSchema = new mongoose.Schema({
  month: { type: String, required: true }, // changed from Date to String
  sales: { type: Number, default: 0 }
});

const restaurantSalesStatsSchema = new mongoose.Schema({
  id_restaurant: { type: String, ref: 'Restaurant', required: true },
  monthlySales: [monthlySalesSchema]
});

module.exports = mongoose.model('stats_restaurants', restaurantSalesStatsSchema);


// le nombre de ventes (order) par jours/semaine/mois/année 
// la quantité d'items vendu par jours /semaines /mois/année pour chacun des items
// la quantité de menus vendu par jours /semaines /mois/année pour chacun des menus
// la recette total (argent généré) par jours /semaines /mois/année 