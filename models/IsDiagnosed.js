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
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            // references: {
            //   model: 'user',
            //   key: 'user_id'
            // }
        },
        client_id: {
            type: DataTypes.UUID,
            allowNull: false,
            // references: {
            //   model: 'client',
            //   key: 'client_id'
            // }
        },
        dx_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        modelName: 'isdiagnosed'
    }
);

module.exports = IsDiagnosed;