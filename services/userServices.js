const { User } = require('../models');
const jwtGenerator = require('../api/jwGenerator');

const create = async (newUser) => {
  const alreadyExists = await User.findOne({ where: { email: newUser.email } });
  if (alreadyExists) return null;
  const createdUser = await User.create(newUser);
  const response = jwtGenerator({ id: createdUser.id, email: createdUser.email });
  return { token: response };
};

const getAll = async () => {
const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const deleteUser = async ({id}) => {
  const response = await User.findByPk(id);
  if (!response) return null;
  return User.destroy({ where: { id } });
};

module.exports = {
  create,
  getAll,
  getById,
  deleteUser,
};
