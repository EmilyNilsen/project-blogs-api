module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories',
    { name: DataTypes.STRING },
    {
      underscore: true,
      timestamps: false,
      tableName: 'Categories',
    });
  return Category;
};
