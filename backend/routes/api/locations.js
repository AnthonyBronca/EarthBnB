const express = require("express");
const router = express.Router();
const {User,Location, Image, Review} = require('../../db/models');







router.get('/', (async(req,res)=>{
    const locations = await Location.findAll({
        include: Image
    })
    // console.log(locations[0].Images[0].url, "THIS IS LOCATIONS!!!!!!!!!!!!")
    return res.json(locations)
}))


router.get('/list', (async(req,res)=>{
    const locations = await Location.findAll()
    // console.log('locations?***********************', locations)
    //locations is an array of objects. ex: {id: 1, userId: 1}
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
    console.log(id, "this is id?")
    const location = await Location.findByPk(id, {include: Image});


    return res.json(location)
})

router.put('/:id', async(req,res)=>{
    const id = req.body.locationId.id // grab the id
    const newFormItems = req.body //the form items from the request
    console.log(newFormItems) //console log
    const newPrice = newFormItems.price; //variable for the new form items
    const newName = newFormItems.name; //variable for new form items
    const newImage = newFormItems.url //varaible for new from items
//^ all of this is same as post stuff

    const location = await Location.findByPk(id, {include: Image})
    //find that specific location and image
    const oldPrice = location.price; // grab the old data
    const oldName = location.name; //grab the old data
    const oldImage = location.Images[0] //grab the old data

    if (oldPrice !== newPrice){ //check if they changed the data
        location.price = newPrice; //set the price = new price
        await location.save(); //save that change
    }
    if (oldName !== newName){//check if they changed the data
        location.name = newName; //set the name = new name
        await location.save(); //save that change
    }
    if(oldImage !== newImage){ //check if they changed the data
        const image = await Image.findByPk(oldImage.id) //grab the old image
        image.url = newImage; //update name
        await image.save() //save that change
    }

    const updatedLocation = await Location.findByPk(id, {include: Image})
    //find the location again after the changes are saved
    return res.json(updatedLocation) //send it out
})

router.get('/:id/reviews', async(req,res)=>{
    const id = req.params.id
    const reviews = await Review.findAll({where: {locationId:id}})
    res.json(reviews)
})

// router.get('/:id/locations', asyncHandler(async (req, res) => {
//     const currentUserId = req.params.id;
//     const userListings = await User.findByPk(currentUserId, {
//       include: [
//         {model: Location, include: [Image]}
//       ]
//     })
//     res.json(userListings)

// }))



module.exports = router;
