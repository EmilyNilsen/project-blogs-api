const express = require('express');

const validateToken = require('../middlewares/middlewareJwt');
const { validateCategoryIds,
        validateTitle,
        validateContent } = require('../middlewares/validation.BlogPosts');
const { create } = require('../controllers/BlogPosts');

const router = express.Router();

router.post('/',
  validateToken,
  validateTitle,
  validateContent,
  validateCategoryIds,
  create);

module.exports = router;
