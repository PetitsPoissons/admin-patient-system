const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Diagnosis extends Model {}

Diagnosis.init(
    {
        dx_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        dx_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dx_code: {
            type: DataTypes.STRING
        },
        dx_desc: {
            type: DataTypes.TEXT
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'diagnosis'
    }
);
    
module.exports = Diagnosis;
