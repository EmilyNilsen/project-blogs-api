const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true,
  },
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
    User.hasMany(models.BlogPosts, { foreignKey: 'userId' });
  };
return User;
};
