const express = require("express");
const router = express.Router();
const {User,Location, Image, Review} = require('../../db/models');
const asyncHandler = require('express-async-handler');




// router.get('/:id/reviews', asyncHandler(async(req,res)=>{
//     const id = req.params.id
//     const reviews = await Review.findAll({where: {userId:id}})
//     res.json(reviews)
// }))

router.post('/:id/reviews', asyncHandler(async(req,res)=> {
    const {userId, locationId, review, rating} = req.body;
    console.log(req.body)

        const newReview = await Review.create({
            userId,
            locationId,
            review,
            rating,
        })

        // return res.send(':)')
        return res.json(newReview) //this sends an object
}))

// router.delete('/:id/reviews', asyncHandler(async(req,res)=> {
//     const id = req.body.reviewId

//     const item = await Review.findByPk(id)
//     const deletedItem = item
//     await item.destroy();
//     res.json(deletedItem)
// }))




module.exports = router
