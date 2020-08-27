const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Diagnosis extends Model {}

Diagnosis.init(
    {
        dx_code:{
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        dx_title:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        dx_desc:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Diagnosis'
    }
);
    
module.exports = Diagnosis;
