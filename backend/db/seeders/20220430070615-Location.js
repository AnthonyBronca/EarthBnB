'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Locations', [
    {userId: '1',address: '9320 Talbot Dr.',city:'Chester',state:'PA',country: 'USA',name: 'Full 4 Bed 3 bath home',price: 52.00, createdAt: '2022-03-02', updatedAt: '2022-03-02'},
    {userId: '1',address: '21 S. South Ave.',city:'Prattville',state:'AL',country: 'USA',name: 'Full 5 Bed 4 bath home',price: 61.00, createdAt: '2022-03-02', updatedAt: '2022-03-02'},
    {userId: '2',address: '92 Mill Pond Street',city:'Waldorf',state:'MD',country: 'USA',name: '1 bed 1 bath in 4x4 Home',price: 15.00, createdAt: '2022-03-02', updatedAt: '2022-03-02'
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Locations', null, {});
  }
};
