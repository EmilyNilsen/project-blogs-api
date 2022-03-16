const validateName = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = validateName;
