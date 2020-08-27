const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Intervention extends Model {}

Intervention.init(
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
      type: DataTypes.STRING,
      allowNull: false
    },
    procedure_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'intervention'
  }
);

module.exports = Intervention;