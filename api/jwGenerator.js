const jwt = require('jsonwebtoken');

const configJwt = {
  expiresIn: '2d',
};

const SECRET = process.env.JWT_SECRET;

module.exports = (data = {}) => jwt.sign({ data }, SECRET, configJwt);
