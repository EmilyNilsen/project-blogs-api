const validateCategoryIds = (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
    next();
  } catch (e) {
    next(e);
  }
};

const validateTitle = (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: '"title" is required' });
    next();
  } catch (e) {
    next(e);
  }
};

const validateContent = (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ message: '"content" is required' });
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  validateCategoryIds,
  validateTitle,
  validateContent,
};
