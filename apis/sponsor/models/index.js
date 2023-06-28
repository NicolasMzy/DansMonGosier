const Credentials = require('./credentials');
const Identity = require('./identity');
const Sponsor = require('./sponsor');

Credentials.hasOne(Identity, {foreignKey: 'id_credentials'});
Credentials.hasMany(Sponsor, {foreignKey: 'id_sponsor'});
Credentials.hasOne(Sponsor, {foreignKey: 'id_sponsored'});

module.exports = {
  Credentials: Credentials,
  Identity: Identity,
  Sponsor: Sponsor,
};
