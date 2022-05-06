'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {userId:4, locationId:63, review:'Wow this place was amazing!', rating:5,  createdAt: '10-10-2000', updatedAt: '10-10-2000'},
     {userId:5, locationId:91, review:'The place was very clean!', rating:4, createdAt: '10-10-2000', updatedAt: '10-10-2000'},
     {userId:4, locationId:91, review:'This place was okay', rating:3,  createdAt: '10-10-2000', updatedAt: '10-10-2000'},
     {userId:4, locationId:92, review:'One of the best places I have stayed at!', rating:5, createdAt: '10-10-2000', updatedAt: '10-10-2000' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
