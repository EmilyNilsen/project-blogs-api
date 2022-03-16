const express = require('express');

const validateToken = require('../middlewares/middlewareJwt');
const validateName = require('../middlewares/validation.categories');

const categories = require('../controllers/Categories');

const router = express.Router();

router.post('/',
  validateToken,
  validateName,
  categories);

module.exports = router;
