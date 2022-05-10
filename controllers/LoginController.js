const loginService = require('../services/loginService');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const response = await loginService.authentication(email, password);
  if (!response) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(200).json(response);
};

module.exports = login;
