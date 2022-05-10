const express = require('express');

const validateToken = require('../middlewares/middlewareJwt');
const { validateCategoryIds,
        validateTitle,
        validateContent } = require('../middlewares/validation.BlogPosts');
const { create, getAll } = require('../controllers/BlogPostsController');

const router = express.Router();

router.post('/',
  validateToken,
  validateTitle,
  validateContent,
  validateCategoryIds,
  create);

router.get('/',
  validateToken,
  getAll);

module.exports = router;
