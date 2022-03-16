const express = require('express');

const validation = require('../middlewares/validation.User');
const validateToken = require('../middlewares/middlewareJwt');

const { create, getAll, getById } = require('../controllers/User');

const router = express.Router();

router.post('/',
  validation.validateDisplayName,
  validation.validateEmail,
  validation.validatePassword,
  create);

router.get('/',
  validateToken,
  getAll);

router.get('/:id',
  validateToken,
  getById);

module.exports = router;
