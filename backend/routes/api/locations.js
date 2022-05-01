const express = require("express");
const router = express.Router();
const csrf = require("csurf");
const { check, validationResult } = require("express-validator");
const {User,Location, Image} = require('/Users/anthonybronca/Desktop/w14-solo/backend/db/models');
// const { asyncHandler, handleValidationErrors } = require("../utils");
const csrfProtection = csrf({ cookie: true });


router.get('/', (async(req,res)=>{
    const locations = await Location.findAll({
        include: Image
    }) //locations is an array of all location items
    //refactor these to be one .map^? i can forEach the locations array and put all the locations within an object so that we can key into it?
    return res.json(locations)
}))























module.exports = router;

// const locationName = locations.map(location => location.name) //array of all location names: Full 4 Bed 3 Bath home
// const locationAddress = locations.map(location => location.address) //array of all location address: 9320 talbot dr.
// const locationState = locations.map(location => location.state) //array of all location states: PA,FL
// const locationCity = locations.map(location => location.city) //array of all cities: Miami, NYC
// const locationCounty = locations.map(location => location.country) //array of all countries: USA
// const price = locations.map(location => location.price)// array or all prices
// const locationOwnerId = locations.map(location => location.userId) // array of ownerId
// let usersId = []; //array of just id?
// const locationImage = await Image.findOne({
//     where: {
//         locationId: 1
//     }
// })
// const locationURL = locationImage.url
