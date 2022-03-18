const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  published: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
};

module.exports = (sequelize) => {
  const BlogPosts = sequelize.define(
    'BlogPosts',
    attributes,
    {
      underscore: true,
      timestamps: false,
      tableName: 'BlogPosts',
    },
  );
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPosts;
};
