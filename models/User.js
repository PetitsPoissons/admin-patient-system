const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    user_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [6, 20]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [6, 20]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
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
    street: {
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
    supervisor_id: {
      type: DataTypes.UUID
    },
    access_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'access',
        key: 'access_id'
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    license_number: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 45]
      }
    },
    license_type: {
      type: DataTypes.STRING
    },
    license_expiration: {
      type: DataTypes.DATE
    },
    npi_number: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 45]
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;