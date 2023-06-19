const Credentials = require('./credentials');
const Address = require('./address');
const AppUser = require('./app_user');
const Restaurant = require('./restaurant');
const Sponsor = require('./sponsor');

Credentials.hasMany(Address, { foreignKey: 'id_credentials'});
Credentials.hasOne(AppUser, { foreignKey: 'id_credentials'});
Credentials.hasOne(Restaurant, {foreignKey: 'id_credentials'});
Credentials.hasMany(Sponsor, {foreignKey: 'id_sponsor'});
Credentials.hasOne(Sponsor, { foreignKey: 'id_sponsored'});

module.exports = {
    Credentials: Credentials,
    Address: Address,
    AppUser: AppUser,
    Restaurant: Restaurant,
    Sponsor: Sponsor,
};