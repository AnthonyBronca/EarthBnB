'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
    {locationId:"2",userId:'3',startDate:'07/04/2022',endDate:'07/05/2022',createdAt:'2022-03-02',updatedAt:'2022-03-02'},
    {locationId:"3",userId:'2',startDate:'06/01/2022',endDate:'07/01/2022',createdAt:'2022-03-02',updatedAt:'2022-03-02'},
    {locationId:"4",userId:'1',startDate:'07/04/2022',endDate:'07/05/2022',createdAt:'2022-03-02',updatedAt:'2022-03-02'}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
