const { Categories } = require('../models');

const create = async (req, res, _next) => {
  const createdCategory = await Categories.create(req.body);
  return res.status(201).json({ id: createdCategory.id, name: createdCategory.name });
};

const getAll = async (_req, res, next) => {
  try {
    const categories = await Categories.findAll();
    return res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
};
