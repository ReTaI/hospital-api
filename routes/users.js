const express = require('express');
const usersController = require('../controllers').users;

const router = express.Router();
router.post('/signin', usersController.signIn);
router.get('/', usersController.getAll);
router.patch('/edit', usersController.edit);
router.delete('/delete/:id', usersController.delete);

module.exports = router;
