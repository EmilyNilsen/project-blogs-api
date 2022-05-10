const { Categories } = require('../models');

const create = async (newCategory) => {
  const createdCategory = await Categories.create(newCategory); 
  return createdCategory;
};

const getAll = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};
