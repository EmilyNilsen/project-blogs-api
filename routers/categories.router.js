const express = require('express');

const validateToken = require('../middlewares/middlewareJwt');
const validateName = require('../middlewares/validation.categories');

const { create, getAll } = require('../controllers/CategoriesController');

const router = express.Router();

router.post('/',
  validateToken,
  validateName,
  create);

router.get('/',
  validateToken,
  getAll);

module.exports = router;
