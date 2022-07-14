const { DataTypes } = require('sequelize');

const attributes = {
  displayName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    attributes,
    {
      underscore: true,
      timestamps: false,
      tableName: 'Users',
    },
  );
  User.associate = (models) => {
    User.hasMany(models.BlogPosts, { foreignKey: 'userId'}, onUpdate='CASCADE', onDelete='CASCADE');
  };
return User;
};
