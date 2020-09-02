const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  // instance method to check password at login
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
      validate: {
        len: [6, 20]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
      defaultValue: true
    },
    license_number: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 45]
      }
    },
    license_type: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 45]
      }
    },
    license_expiration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    npi_number: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 45]
      }
    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData; 
      },
      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;