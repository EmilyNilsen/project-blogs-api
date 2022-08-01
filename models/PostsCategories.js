module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategory', {},
  { timestamps: false, tableName: 'PostsCategories' });

  PostCategory.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, { as: 'posts',
    through: PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId',
  });

    models.BlogPosts.belongsToMany(models.Categories, { as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategory;
};
