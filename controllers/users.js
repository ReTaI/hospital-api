const { User } = require('../models');

module.exports = {
  async signIn(req, res) {
    try {
      const { login, password } = req.body;
      if (!(login && password)) return res.status(400).send({ msg: 'Provide all necessary data' });
      const user = await User.findOne({ where: { login } });
      if (!user) {
        return res.status(404).send({ msg: 'User not found! Please, signup' });
      }
      if (password !== user.password) return res.status(401).send({ msg: 'Wrong password' });
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async edit(req, res) {
    try {
      const {
        fullname, address, email, phone, position, id,
      } = req.body;
      await User.update({
        fullname,
        address,
        email,
        phone,
        position,
      }, {
        where: { id },
      });
      const users = await User.findAll();
      return res.status(200).send(users);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id } });
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
