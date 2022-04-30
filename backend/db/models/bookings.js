'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    locationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Bookings.associate = function(models) {
    // associations can be defined here
    Bookings.belongsTo(models.User, {
      foreignKey: 'userId'
    }),
    Bookings.belongsTo(models.Location, {
      foreignKey: 'locationId'
    })
  };
  return Bookings;
};
