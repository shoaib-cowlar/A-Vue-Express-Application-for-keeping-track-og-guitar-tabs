const bcrypt = require("bcrypt");


module.exports = (sequelize, DataTypes) =>
  {
    const User = sequelize.define(
      "User",
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "Users",
      }
    );
      User.prototype.comparePassword = function (password) {
        return bcrypt.compare(password, this.password)
      }

    return User;
  
  }