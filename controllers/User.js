const { User } = require('../models');
const jwtGenerator = require('../api/jwGenerator');

const create = async (req, res, _next) => {
  const { email } = req.body;
  const alreadyExists = await User.findOne({ where: { email } });
  
  if (alreadyExists) return res.status(409).json({ message: 'User already registered' });
    
    const newUser = await User.create(req.body);
    const token = jwtGenerator({ id: newUser.id, email });
    return res.status(201).json({ token });
};

const getAll = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
};