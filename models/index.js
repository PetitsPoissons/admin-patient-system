const User = require('./User');
const Access = require('./Access');
const Intervention = require('./Intervention');
const Procedure = require('./Procedure');
const Document = require('./Document');
const Client = require('./Client');
const Diagnosis = require('./Diagnosis');

// create associations between User and Access
User.belongsTo(Access, {
  foreignKey: 'access_id'
});

Access.hasOne(User, {
  foreignKey: 'access_id'
})

module.exports = {
  User,
  Access,
  Intervention,
  Procedure,
  Document,
  Client,
  Diagnosis };