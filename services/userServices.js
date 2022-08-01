const { User } = require('../models');

const create = async (userInfo) => {
  const created = await User.create(userInfo);
  return created.dataValues;
};

const getAll = async (attributes) => {
const users = await User.findAll(attributes);
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const deleteUser = async (idUser) => {
  const delUser = await User.destroy({ where: { id: idUser } });
  return delUser;
};

module.exports = {
  create,
  getAll,
  getById,
  deleteUser,
};
