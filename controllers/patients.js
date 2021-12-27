const { Patient } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const patients = await Patient.findAll();
      res.status(200).send(patients);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async edit(req, res) {
    try {
      const {
        fullname, doctor, room, dateStart, dateEnd, id,
      } = req.body;
      await Patient.update({
        fullname,
        doctor,
        room,
        dateStart,
        dateEnd,
      }, {
        where: { id },
      });
      const patients = await Patient.findAll();
      return res.status(200).send(patients);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async add(req, res) {
    try {
      const {
        fullname, doctor, room, dateStart, insurance,
      } = req.body;
      await Patient.create({
        fullname,
        doctor,
        room,
        dateStart,
        insurance,
      });
      const patients = await Patient.findAll();
      return res.status(200).send(patients);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
