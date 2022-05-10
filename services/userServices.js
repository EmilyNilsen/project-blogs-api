const { User } = require('../models');
const jwtGenerator = require('../api/jwGenerator');

const create = async (newUser) => {
  const alreadyExists = await User.findOne({ where: { email: newUser.email } });
  if (alreadyExists) return null;
  const createdUser = await User.create();
  const token = jwtGenerator({ id: createdUser.id, email: createdUser.email });
  return token;
};

const getAll = async () => {
const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};
