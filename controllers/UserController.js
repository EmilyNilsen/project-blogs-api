const userServices = require('../services/userServices');

const create = async (req, res, _next) => {
  const responseJwt = await userServices.create(req.body);
  if (!responseJwt) {
    return res.status(409).json({ message: 'User already registered' });
  }
    return res.status(201).json(responseJwt);
};

const getAll = async (_req, res, next) => {
  try {
    const users = await userServices.getAll();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userServices.getById(id);
    if (!response) return res.status(404).json({ message: 'User does not exist' });
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
};

const deleteUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userServices.deleteUser({ id });
    if(!response) return res.status(404).json({ message: 'user not found'})
    return res.status(204).json(send);
  } catch (e) {
    next(e);
  };
};

module.exports = {
  create,
  getAll,
  getById,
  deleteUserController,
};
