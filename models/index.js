const User = require('./User');
const Access = require('./Access');
const Client = require('./Client');
const Procedure = require('./Procedure');
// const Intervention = require('./Intervention');
// const Document = require('./Document');
// const Diagnosis = require('./Diagnosis');

// create associations between User and Access
Access.hasMany(User, {
  foreignKey: 'access_id'
});
User.belongsTo(Access, {
  foreignKey: 'access_id'
});

// create associations between User and Intervention
// User.hasMany(Intervention, {
//   foreignKey: 'user_id'
// });
// Intervention.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// create associations between Client and Intervention
// Client.hasMany(Intervention, {
//   foreignKey: 'client_id'
// });
// Intervention.belongsTo(Client, {
//   foreignKey: 'client_id'
// });

// create associations between Procedure and Intervention
// Procedure.hasMany(Intervention, {
//   foreignKey: 'procedure_id'
// });
// Intervention.belongsTo(Procedure, {
//   foreignKey: 'procedure_id'
// });

// create associations between Document and Intervention
// Document.hasMany(Intervention, {
//   foreignKey: 'document_id'
// });
// Intervention.belongsTo(Document, {
//   foreignKey:'document_id'
// });

module.exports = {
  User,
  Access,
  Client,
  Procedure
};
  // Intervention,
  // Document,
  // Diagnosis