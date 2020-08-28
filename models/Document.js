const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Document extends Model {}

Document.init(
  {
    document_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    document_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    document_desc: {
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

module.exports = Document;