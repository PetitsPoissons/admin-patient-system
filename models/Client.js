const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Client extends Model {}

Client.init(
    {
        client_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 45]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 45]
            }      
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ssn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        primary_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alt_phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 45]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 45]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        insurance: {
            type: DataTypes.BOOLEAN,
            //allowNull: false
            defaultValue: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'client'
    }
);

module.exports = Client;
