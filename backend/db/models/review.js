'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {
      foreignKey: 'userId'
    }),
    Review.belongsTo(models.Location, {
      foreignKey: 'locationId'
    })
  };
  return Review;
};
