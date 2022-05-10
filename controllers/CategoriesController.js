const categoriesServices = require('../services/categoriesServices');

const create = async (req, res, _next) => {
  const createdCategory = await categoriesServices.create(req.body);
  return res.status(201).json({ id: createdCategory.id, name: createdCategory.name });
};

const getAll = async (req, res, next) => {
  try {
    const categories = await categoriesServices.getAll();
    return res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
};
