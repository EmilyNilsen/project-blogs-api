const express = require('express');

const validateToken = require('../middlewares/middlewareJwt');
const { validateCategoryIds,
        validateTitle,
        validateContent,
        validateCategories} = require('../middlewares/validation.BlogPosts');
const { create, getAll, getById, update } = require('../controllers/BlogPostsController');

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

router.put('/:id',
  validateToken,
  validateTitle,
  validateContent,
  validateCategories,
  update);

module.exports = router;
