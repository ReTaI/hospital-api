const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
  }
  Patient.init({
    fullname: DataTypes.STRING,
    doctor: DataTypes.STRING,
    room: DataTypes.INTEGER,
    dateStart: DataTypes.STRING,
    dateEnd: DataTypes.STRING,
    diagnoses: DataTypes.STRING,
    simptomes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};
