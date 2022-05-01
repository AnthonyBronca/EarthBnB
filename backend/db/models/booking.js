'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    locationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Location, {
      foreignKey: 'locationId'
    })
    Booking.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Booking;
};
