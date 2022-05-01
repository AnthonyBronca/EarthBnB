const express = require("express");
const router = express.Router();
const csrf = require("csurf");
const { check, validationResult } = require("express-validator");
const {User,Location, Image} = require('/Users/anthonybronca/Desktop/w14-solo/backend/db/models');
// const { asyncHandler, handleValidationErrors } = require("../utils");
const csrfProtection = csrf({ cookie: true });


router.get('/', (async(req,res)=>{
    const locations = await Location.findAll({}) //locations is an array of all location items
    const locationName = locations.map(location=> location.name) //array of all location names: Full 4 Bed 3 Bath home
    const locationAddress = locations.map(location=> location.address) //array of all location address: 9320 talbot dr.
    const locationState = locations.map(location => location.state) //array of all location states: PA,FL
    const locationCity = locations.map(location=> location.city)
    const locationCounty = locations.map(location=> location.country)
    const price = locations.map(location => location.price)
    const locationOwnerId = locations.map(location => location.userId)
    let usersId = [];
    locationOwnerId.forEach(id=> usersId.push(id))



}))



module.exports = router;
