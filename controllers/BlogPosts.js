const { BlogPosts, Categories, User } = require('../models');

const create = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;

  const getAllCategories = await Categories.findAll();
  const registeredCategories = getAllCategories.map(({ id }) => id);

  const categoriesExist = categoryIds.every((id) => registeredCategories.includes(id));
  if (!categoriesExist) return res.status(400).json({ message: '"categoryIds" not found' });

  const tokenDecoded = req.tokenData;
  const user = await User.findOne({ where: { email: tokenDecoded.email } });
  const newPost = await BlogPosts.create({ title, content, userId: user.dataValues.id });
  const postSucess = {
    id: newPost.id,
    userId: user.id,
    title,
    content,
  };

  return res.status(201).json(postSucess);
};

module.exports = {
  create,
};
