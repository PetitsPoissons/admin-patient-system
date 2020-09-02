const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Relation extends Model {}

Relation.init(
  {
    relation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    client_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'client',
        key: 'client_id'
      }
    },
    start_date: {
      type: DataTypes.DATE,
      defaultValue: new Date
    },
    end_date: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'relation'
  }
);

module.exports = Relation;