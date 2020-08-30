const Access = require('./Access');
const User = require('./User');
const Client = require('./Client');
// const Diagnosis = require('./Diagnosis');
// const IsDiagnosed = require('./IsDiagnosed');
const Relation = require('./Relation');
const Procedure = require('./Procedure');
const Treatment = require('./Treatment');
const Form = require('./Form');
// const Record = require('./Record');

/**********************************/
/***** MANY-TO-MANY RELATIONS *****/
/**********************************/

User.belongsToMany(Client, {
  through: Relation,
  foreignKey: 'user_id'
});
Client.belongsToMany(User, {
  through: Relation,
  foreignKey: 'client_id'
})

// Diagnosis.belongsToMany(Client, {
//   through: IsDiagnosed,
//   foreignKey: 'dx_id'
// });
// Client.belongsToMany(Diagnosis, {
//   through: IsDiagnosed,
//   foreignKey: 'client_id'
// });

Procedure.belongsToMany(Relation, {
  through: Treatment,
  foreignKey: 'procedure_id'
});
Relation.belongsToMany(Procedure, {
  through: Treatment,
  foreignKey: 'relation_id'
});

// Treatment.belongsToMany(Form, {
//   through: Record,
//   foreignKey: 'tx_id'
// });
// Form.belongsToMany(Treatment, {
//   through: Record,
//   foreignKey: 'form_id'
// });


/*********************************/
/***** ONE-TO-MANY RELATIONS *****/
/*********************************/
  // onDelete: 'CASCADE',
  // onUpdate: 'CASCADE'
  // ????????????????????

Access.hasMany(User, {
  foreignKey: 'access_id'
});
User.belongsTo(Access, {
  foreignKey: 'access_id'
});

// Diagnosis.hasMany(IsDiagnosed, {
//   foreignKey: 'dx_id'
// });
// IsDiagnosed.belongsTo(Diagnosis, {
//   foreignKey: 'dx_id'
// });

// Client.hasMany(IsDiagnosed, {
//   foreignKey: 'client_id'
// });
// IsDiagnosed.belongsTo(Client, {
//   foreignKey: 'client_id'
// });

Client.hasMany(Relation, {
  foreignKey: 'client_id'
});
Relation.belongsTo(Client, {
  foreignKey: 'client_id'
});

User.hasMany(Relation, {
  foreignKey: 'user_id'
});
Relation.belongsTo(User, {
  foreignKey: 'user_id'
});

Relation.hasMany(Treatment, {
  foreignKey: 'relation_id'
});
Treatment.belongsTo(Relation, {
  foreignKey: 'relation_id'
});

Procedure.hasMany(Treatment, {
  foreignKey: 'procedure_id'
});
Treatment.belongsTo(Procedure, {
  foreignKey: 'procedure_id'
});

// Treatment.hasMany(Record, {
//   foreignKey: 'tx_id'
// });
// Record.belongsTo(Treatment, {
//   foreignKey:'tx_id'
// });

// Form.hasMany(Record, {
//   foreignKey: 'form_id'
// });
// Record.belongsTo(Form, {
//   foreignKey:'form_id'
// });



module.exports = {
  Access,
  User,
  Client,
//   Diagnosis,
//   IsDiagnosed,
  Relation,
  Procedure,
  Treatment,
  Form
//   Record
};
