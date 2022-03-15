const { User } = require('../models');
const jwtGenerator = require('../api/jwGenerator');

const login = async (req, res, _next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email, password } });
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  const token = jwtGenerator(
    { id: user.id,
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    },
  );
  return res.status(200).json({ token });
};

module.exports = login;
