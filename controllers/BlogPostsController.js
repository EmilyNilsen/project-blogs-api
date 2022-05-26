const blogPostsServices = require('../services/blogPostsServices');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { email } = req.tokenData;
    const response = await blogPostsServices.create(email, title, content, categoryIds);
    if (!response) return res.status(400).json({ message: '"categoryIds" not found' });
    return res.status(201).json(response);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const response = await blogPostsServices.getAll();
    return res.status(200).json(response);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await blogPostsServices.getById(id);
    return res.status(200).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
