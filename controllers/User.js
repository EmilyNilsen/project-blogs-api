const { User } = require('../models');
const jwtGenerator = require('../api/jwGenerator');

const create = async (req, res, _next) => {
  const { displayName } = req.body;
  const alreadyExists = User.findOne({ where: { displayName } });
  
  if (alreadyExists) return res.status(409).json({ error: 'User already registered' });
    
    const newUser = await User.create(req.body);
    const token = jwtGenerator({ id: newUser.id, displayName });
    return res.status(201).json({ token });
};

module.exports = {
  create,
};
