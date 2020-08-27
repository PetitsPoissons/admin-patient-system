/*
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Procedure extends Model {}

Procedure.init(
  {
    procedure_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    procedure_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    procedure_code: {
      type: DataTypes.STRING
    },
    procedure_desc: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'procedure'
  }  
);

module.exports = Procedure;
*/