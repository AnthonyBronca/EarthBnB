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
     {locationId:3, url: 'https://cdn.shopify.com/s/files/1/0043/8471/8938/products/164160587923314115_1024x1024.jpg?v=1644029373', createdAt: new Date(), updatedAt: new Date()},
     {locationId:4, url: 'https://designingidea.com/wp-content/uploads/2022/01/swimming-pool-with-slate-tile-deck-at-a-mediteranian-mansion-with-arch-and-columns-red-tile-roof-and-a-balcony-with-french-doors-is.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:5, url: 'https://images1.forrent.com/i2/6Lrz9i5UJiqVQPlC69rEyOvzPCdh4GKKdgPgjUdenok/117/image.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:6, url: 'https://images1.apartments.com/i2/7bX-gbTBlBbf2DUzKURYfykRpzkXQMZG3c2N7yTIsDA/117/seven41-winter-park-winter-park-fl-building-photo.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:7, url: 'https://www.sbidawards.com/wp-content/uploads/2020/08/0c2107c787a7815480dd1c833d285ef2a7c89183.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:8, url: 'https://images1.apartments.com/i2/__OVid36x6t_QAjGAp_w2vJYSy0lvOsh50KZZVcGJ0w/117/atlas-oakland-ca-interior-photo.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:9, url: 'https://images1.apartments.com/i2/nsN22aBqMQELR9-jZLyD5TPGAGUZtmVzked2n8uvgzk/117/loft-house-sunnyvale-ca-living-room-town-home.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:10, url: 'https://ei.marketwatch.com/Multimedia/2016/11/04/Photos/ZH/MW-EZ493_miami__20161104120841_ZH.jpg?uuid=f41fe4c4-a2a8-11e6-ac14-001cc448aede', createdAt: new Date(), updatedAt: new Date()},
     {locationId:11, url: 'https://images1.forrent.com/i2/J0XfNtPlLN8TKYIBSh1DUlD-STBEQSJSd3ZXYXQPS40/117/image.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:12, url: 'https://www.essexapartmenthomes.com/-/media/Project/EssexPropertyTrust/Sites/EssexApartmentHomes/Blog/2021/2021-01-12-Studio-vs-One-Bedroom-Apartment-How-They-Measure-Up/Studio-vs-One-Bedroom-Apartment-How-They-Measure-Up-1.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:13, url: 'https://i.ytimg.com/vi/HEVnJWV_eXA/maxresdefault.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:14, url: 'https://www.theplancollection.com/admin/CKeditorUploads/Images/1-9.4.19.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:15, url: 'https://www.irvinecompanyapartments.com/rental-living/wp-content/uploads/2018/07/las-palmas.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:16, url: 'https://images1.apartments.com/i2/DwNS1WJfMqR3BlaqzB9HobEISajqK93JPIkbTx47puM/111/huge-4-bedroom-house-san-antonio-tx-primary-photo.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:17, url: 'https://srresidenceschicago.com/wp-content/uploads/vista_wide-three-bed-13.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:18, url: 'https://www.miamiluxuryhomes.com/wp-content/uploads/condo/1223/paramount-miami-worldcenter-condos-penthouse-living-room.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:19, url: 'https://cdn.vox-cdn.com/thumbor/PYO34qy2Rn6Tu2dPyF7X57T3p6w=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19499595/small_storage_xl.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:20, url: 'https://www.treehugger.com/thmb/7XY4S3w-flgJZUAdFliyg8zItgY=/1109x1109/smart/filters:no_upscale()/tiny-house-brazil-gabi-gu-15-eb33bcb08bbd43b391e23ae1a6c127d3.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:21, url: 'https://cdnb.artstation.com/p/assets/images/images/047/379/505/large/jose-miguel-scopelliti-tatooine-house-ultra-wide.jpg?1647450957', createdAt: new Date(), updatedAt: new Date()},
     {locationId:22, url: 'https://medialibrarycf.entrata.com/15791/MLv3/4/22/2022/03/11/033535/622bceb6af5b86.02923428201.jpg', createdAt: new Date(), updatedAt: new Date()},
     {locationId:23, url: 'https://cdn.homes.com/x2/@v=1080956476@/2/5/582/U8168582/U8168582_0.jpg', createdAt: new Date(), updatedAt: new Date()}
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
