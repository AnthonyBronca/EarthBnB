const express = require("express");
const router = express.Router();
const {User,Location, Image} = require('/Users/anthonybronca/Desktop/w14-solo/backend/db/models');







router.get('/', (async(req,res)=>{
    const locations = await Location.findAll({
        include: Image
    })
    // console.log(locations[0].Images[0].url, "THIS IS LOCATIONS!!!!!!!!!!!!")
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


router.delete('/:id', async(req,res)=>{
    const id = req.params.id
    const item = await Location.findByPk(id, {include: Image})
    const image = item.Images[0]
    await image.destroy();
    await item.destroy();

    res.json(item)

})



module.exports = router;
