const { User } = require('../models');
const jwtGenerator = require('../api/jwGenerator');

const authentication = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return user;
  const response = jwtGenerator(
    { id: user.id,
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    },
  );
  return { token: response };
};

module.exports = {
  authentication,
};
