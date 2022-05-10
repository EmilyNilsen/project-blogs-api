const express = require('express');

const validation = require('../middlewares/validation.Login');

const login = require('../controllers/LoginController');

const router = express.Router();

router.post('/',
  validation.validateEmail,
  validation.validatePassword,
  login);

module.exports = router;
