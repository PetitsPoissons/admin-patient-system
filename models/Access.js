//const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Access extends Model {}

Access.init(
  {
    access_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    access_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['owner', 'administrator', 'clinician', 'basic', 'biller']],
      }
    },
    access_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'access'
  }
);

module.exports = Access;