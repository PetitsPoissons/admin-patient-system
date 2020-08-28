const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Record extends Model {}

Record.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    client_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'client',
        key: 'client_id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    procedure_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'procedure',
        key: 'procedure_id'
      }
    },
    document_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'document',
        key: 'document_id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'record'
  }
);

module.exports = Record;