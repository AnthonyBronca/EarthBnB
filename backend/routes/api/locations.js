const express = require("express");
const router = express.Router();
const {User,Location, Image} = require('../../db/models');







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

    return res.json(item)

})

router.get('/:id', async(req,res)=>{
    const id = req.params.id;
    const location = await Location.findByPk(id, {include: Image});

    return res.json(location)
})

router.put('/:id', async(req,res)=>{
    const id = req.body.locationId.id
    const newFormItems = req.body
    console.log(newFormItems)
    const newPrice = newFormItems.price;
    const newName = newFormItems.name;
    const newImage = newFormItems.url

    const location = await Location.findByPk(id, {include: Image})
    const oldPrice = location.price;
    const oldName = location.name;
    const oldImage = location.Images[0]

    if (oldPrice !== newPrice){
        location.price = newPrice;
        await location.save();
    }
    if (oldName !== newName){
        location.name = newName;
        await location.save();
    }
    if(oldImage !== newImage){
        const image = await Image.findByPk(oldImage.id)
        image.url = newImage;
        await image.save()
    }

    const updatedLocation = await Location.findByPk(id, {include: Image})
    return res.json(updatedLocation)
})



module.exports = router;
