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

const getAll = async (req, res, _next) => {
    const posts = await BlogPosts.findAll({
      include: [{
        model: User,
        attributes: {
          exclude: ['password'],
        },
      }, {
        model: Categories,
        exclude: ['PostsCategories'],
      },
      ],
    });
    // const getPosts = {
    //   id: posts.id,
    //   title: posts.title,
    //   content: posts.content,
    //   published: posts.published,
    //   updated: posts.updated,
    //   user: {
    //     id: user.id,
    //     displayName: user.displayName,
    //     email: user.email,
    //     image: user.image,
    //   },
    // };
    return res.status(200).json(posts);
};

module.exports = {
  create,
  getAll,
};
