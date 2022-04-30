'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    locationId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Images.associate = function(models) {
    // associations can be defined here
    Images.belongsTo(models.Location, {
      foreignKey: 'locationId'
    })
  };
  return Images;
};
