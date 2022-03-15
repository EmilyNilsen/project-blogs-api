module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories', {},
    {
      underscore: true,
      timestamps: false,
      tableName: 'PostsCategories',
    });
  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(
      models.BlogPosts,
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategories },
    );

    models.BlogPosts.belongsToMany(
      models.Categories, 
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategories },
    );
  };
  return PostsCategories;
};
