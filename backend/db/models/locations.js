'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Locations.associate = function(models) {
    // associations can be defined here
    Locations.belongsTo(models.User, {
      foreignKey: 'userId'
    }),
    Locations.hasMany(models.Booking, {
      foreignKey: 'locationId'
    }),
    Locations.hasMany(models.Image, {
      foreignKey: 'locationId'
    })
  };
  return Locations;
};
