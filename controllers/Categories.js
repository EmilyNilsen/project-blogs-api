const { Categories } = require('../models');

const create = async (req, res, _next) => {
  const createdCategory = await Categories.create(req.body);
  return res.status(201).json({ id: createdCategory.id, name: createdCategory.name });
};

module.exports = create;
