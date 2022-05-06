'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
     {locationId:1, url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tiny-houses-1579284305.png?crop=1.00xw:0.788xh;0,0.189xh&resize=640:*', createdAt: '10-10-2000', updatedAt: '10-10-2000'},
     {locationId:2, url: 'https://www.architecturalrecord.com/ext/resources/Issues/2021/02-February/Golden-Valley-Midcentury-Modern-House-01-B.jpg?1611944303', createdAt: '02-14-2014', updatedAt: '02-14-2014'},
     {locationId:3, url: 'https://cdn.shopify.com/s/files/1/0043/8471/8938/products/164160587923314115_1024x1024.jpg?v=1644029373', createdAt: '04-01-2022', updatedAt: '04-01-2022'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
