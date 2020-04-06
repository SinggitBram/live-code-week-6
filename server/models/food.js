'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    ingredients: DataTypes.STRING,
    tag: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Food.associate = function(models) {
    Food.belongsTo(models.User, {foreignKey: 'UserId'})
    // associations can be defined here
  };
  return Food;
};