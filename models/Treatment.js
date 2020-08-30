const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Treatment extends Model {}

Treatment.init(
  {
    tx_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    procedure_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    relation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tx_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'treatment'
  }
);

module.exports = Treatment;