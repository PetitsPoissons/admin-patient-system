const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Form extends Model {}

Form.init(
  {
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    form_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    form_desc: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'form'
  }  
);

module.exports = Form;