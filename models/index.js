const User = require('./User');
const Access = require('./Access');
const Client = require('./Client');
const Procedure = require('./Procedure');
const Document = require('./Document');
const Diagnosis = require('./Diagnosis');
const Record = require('./Record');

// create associations between User and Access
Access.hasMany(User, {
  foreignKey: 'access_id'
});
User.belongsTo(Access, {
  foreignKey: 'access_id'
});

// create associations between User and Record
User.hasMany(Record, {
  foreignKey: 'user_id'
});
Record.belongsTo(User, {
  foreignKey: 'user_id'
});

// create associations between Client and Record
Client.hasMany(Record, {
  foreignKey: 'client_id'
});
Record.belongsTo(Client, {
  foreignKey: 'client_id'
});

// create associations between Procedure and Record
Procedure.hasMany(Record, {
  foreignKey: 'procedure_id'
});
Record.belongsTo(Procedure, {
  foreignKey: 'procedure_id'
});

// create associations between Document and Record
Document.hasMany(Record, {
  foreignKey: 'document_id'
});
Record.belongsTo(Document, {
  foreignKey:'document_id'
});

module.exports = {
  User,
  Access,
  Client,
  Procedure,
  Document,
  Record,
  Diagnosis
};