const express = require('express');

const validation = require('../middlewares/validation.User');
const validateToken = require('../middlewares/middlewareJwt');

const { create, getAll, getById, deleteUserController } = require('../controllers/UserController');

const router = express.Router();

router.post('/',
  validation.validateDisplayName,
  validation.validateEmail,
  validation.validatePassword,
  create);

router.get('/',
  getAll);

router.get('/:id',
  getById);

router.delete('/me',
  validateToken,
  deleteUserController,
);

module.exports = router;
