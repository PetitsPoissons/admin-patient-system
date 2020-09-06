const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class IsDiagnosed extends Model {}

IsDiagnosed.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        relation_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'relation',
              key: 'relation_id'
            }
        },
        dx_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'diagnosis',
                key: 'dx_id'
              }
        },
        dx_date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'is_diagnosed'
    }
);

module.exports = IsDiagnosed;