const express = require('express');
const patientsController = require('../controllers').patients;

const router = express.Router();
router.get('/', patientsController.getAll);
router.patch('/edit', patientsController.edit);
router.post('/add', patientsController.add);

module.exports = router;
