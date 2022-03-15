const validateDisplayName = (req, res, next) => {
  try {
    const { displayName } = req.body;
    if (displayName.length < 8) {
      return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
      });
    }
    next();
  } catch (e) {
    next(e);
  }
};

const validateEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    // validaçao de email com regex usada de https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(email);
    if (!email) return res.status(400).json({ message: '"email" is required' });
    if (!validEmail) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
  } catch (e) {
    next(e);
  }
};

const validatePassword = (req, res, next) => {
  try {
    const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};
