const express = require('express');

const validation = require('../middlewares/validation.User');

const { create } = require('../controllers/User');

const router = express.Router();

router.post('/',
  validation.validateEmail,
  validation.validatePassword,
  validation.validateDisplayName,
  create);

module.exports = router;
