const { BlogPosts, Categories, User } = require('../models');

const create = async (tokenDecoded, title, content, categoryIds) => {
  const dbResponse = await Categories.findAll();
  const registeredCategories = dbResponse.map(({ id }) => id);
  const categories = categoryIds.every((id) => registeredCategories.includes(id));
  if (!categories) return null;

  const user = await User.findOne({ where: { email: tokenDecoded.email } });
  const newPost = await BlogPosts.create({ title, content, userId: user.dataValues.id });
  
  const postSucess = {
    id: newPost.id,
    userId: user.id,
    title,
    content,
  };
  return postSucess;
};

const getAll = async () => {
const posts = await BlogPosts.findAll({
  include: [{
    model: User,
    attributes: { exclude: ['password'] },
      as: 'user',
  }, {
    model: Categories,
    through: { attributes: [] },
    as: 'categories',
    }],
});
return posts;
};

const getById = async (id) => {
  const post = await BlogPosts.findByPk(id);
  console.log(post);
  return post;
};

module.exports = {
  create,
  getAll,
  getById,
};
