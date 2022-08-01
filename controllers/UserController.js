const userServices = require('../services/userServices');
const jwtGenerator = require('../api/jwGenerator');

const create = async (req, res, _next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const existEmail = await userServices.getAll({ where : { email } });
    if (existEmail.length) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const responseJwt = await userServices.create({ displayName, email, password, image });
    if (responseJwt) {
      const token = jwtGenerator(email);
      return res.status(201).json({ 'token': token });
    }
  } catch (e) {
    console.log(e.message);
  }
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
    const { id } = req.tokenData;
    await userServices.deleteUser(id);
    return res.status(204).end();
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
