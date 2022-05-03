const express = require("express");
const router = express.Router();
const csrf = require("csurf");
const { check, validationResult } = require("express-validator");
const {User,Location, Image} = require('/Users/anthonybronca/Desktop/w14-solo/backend/db/models');
const { response } = require("express");
const csrfProtection = csrf({ cookie: true });


router.get('/', (async(req,res)=>{
    const locations = await Location.findAll({
        include: Image
    })
    return res.json(locations)
}))


router.post('/new', (async(req,res)=>{
    const {userId,address, city, state, country, name, price, url} = req.body;

        const newLocation = await Location.create({
            userId,
            address,
            city,
            state,
            country,
            name,
            price
        })
        const locationId = newLocation.id

       await Image.create({
           locationId,
           url
       })

       const locations = await Location.findAll({
           include: Image
       })
        return res.json(locations) //this sends an object
}))



module.exports = router;
