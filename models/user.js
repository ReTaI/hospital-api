const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    role: DataTypes.INTEGER,
    address: DataTypes.STRING,
    position: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
