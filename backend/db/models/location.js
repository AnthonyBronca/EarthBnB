'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Location.hasMany(models.Booking, {
      foreignKey: 'locationId'
    })
    Location.hasMany(models.Image, {
      foreignKey: 'locationId'
    })
  };
  return Location;
};
