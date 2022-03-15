const express = require('express');

const validation = require('../middlewares/validation.User');

const { create } = require('../controllers/User');

const router = express.Router();

router.post('/',
  validation.validateDisplayName,
  validation.validateEmail,
  validation.validatePassword,
  create);

module.exports = router;
