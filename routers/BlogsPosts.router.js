const express = require('express');

const validateToken = require('../middlewares/middlewareJwt');
const { validateCategoryIds,
        validateTitle,
        validateContent } = require('../middlewares/validation.BlogPosts');
const { create, getAll, getById } = require('../controllers/BlogPostsController');

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

router.get('/:id',
  validateToken,
  getById);

module.exports = router;
