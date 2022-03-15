const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};
module.exports = (sequelize) => {
  const Category = sequelize.define('Categories',
  attributes,
    {
      underscore: true,
      timestamps: false,
      tableName: 'Categories',
    });
  return Category;
};
