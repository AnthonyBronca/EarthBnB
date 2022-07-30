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
    {userId: '2',address: '21 S. South Ave.',city:'Prattville',state:'AL',country: 'USA',name: 'Full 5 Bed 4 bath home',price: 61.00, createdAt: '2022-03-02', updatedAt: '2022-03-02'},
    {userId: '3',address: '92 Mill Pond Street',city:'Waldorf',state:'MD',country: 'USA',name: '1 bed 1 bath in 4x4 Home',price: 15.00, createdAt: '2022-03-02', updatedAt: '2022-03-02'},
    {userId: '1',address: '1500 LinkedIn Way',city:'San Francisco',state:'CA',country: 'USA',name: '6 bed 4 bath full home',price: 200, createdAt: new Date(), updatedAt: new Date()},
    {userId: '3',address: '3231 Seeder Dr.',city:'Atalanta',state:'GA',country: 'USA',name: '1 bed 1 bath apartment',price: 39.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '2',address: '555 Angel Number Way',city:'Los Angeles',state:'CA',country: 'USA',name: '3 bed 2 bath in apartment',price: 55.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '2',address: '999 Many Nines Dr.',city:'Grandville',state:'FL',country: 'USA',name: '9 bed 9 bath full home',price: 999.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '3',address: '414 Random St.',city:'Nessie',state:'FL',country: 'USA',name: '1 bed 1 bath in apartment',price: 15.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '1',address: '1414 Hireme Ave.',city:'Orlando',state:'FL',country: 'USA',name: '3 bed 3 bath apartment',price: 33.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '1',address: '612 EasterEgg Dr.',city:'Miami',state:'FL',country: 'USA',name: '5 bed 3 bath Full Condo',price: 78.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '2',address: '5511 N. Destiny Dr.',city:'Destin',state:'AL',country: 'USA',name: '2 bed 2 bath full apartment',price: 15.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '3',address: '818 N. Haven Dr.',city:'Kissimee',state:'FL',country: 'USA',name: '1 bed 1 bath full apartment',price: 15.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '2',address: '791 S. Debra Way.',city:'New York City',state:'NY',country: 'USA',name: '1 bed 1 bath apartment',price: 21.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '1',address: '677 W. Charming Ave.',city:'GorgeTown',state:'TX',country: 'USA',name: '3 bed 3 bath Full Home',price: 33.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '2',address: '511 N. Tesla St.',city:'Tesla City',state:'FL',country: 'USA',name: '4 bed 3 bath in apartment',price: 15.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '1',address: '444 E. Fake St.',city:'Fake',state:'MD',country: 'USA',name: '3 bed 2 bath full home',price: 44.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '1',address: '911 N. Xbox Way',city:'Seattle',state:'WA',country: 'USA',name: '3 bed 2 bath full Condo',price: 50.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '1',address: '12345 N. Anthony Dr.',city:'Anthony',state:'FL',country: 'USA',name: '5 bed 4 bath Condo',price: 215.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '3',address: '4491 E. Switch Ave.',city:'Nintendo',state:'TX',country: 'USA',name: '1 bed 1 bath Tiny Home',price: 10.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '3',address: '331 S. Orange Blvd.',city:'Plant City',state:'FL',country: 'USA',name: '1 bed 1 bath Tiny Home',price: 77.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '2',address: '222 N. Grogu Way',city:'Tatooine',state:'NY',country: 'USA',name: '3 bed 2 bath in intergalatic home',price: 150.00, createdAt: new Date(), updatedAt: new Date()},
    {userId: '2',address: '888 Cool Homes Dr.',city:'Cocktail',state:'GA',country: 'USA',name: '4 bed 4 bath in 4x4 apartment',price: 200, createdAt: new Date(), updatedAt: new Date()},
    {userId: '3',address: '716 N. Coding Dr.',city:'St. Petersburg',state:'FL',country: 'USA',name: '5 bed 5 bath in Full Home',price: 350.00, createdAt: new Date(), updatedAt: new Date()}
  ], {});
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
