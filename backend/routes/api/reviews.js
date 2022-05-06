const express = require("express");
const router = express.Router();
const {User,Location, Image, Review} = require('../../db/models');
const asyncHandler = require('express-async-handler');




router.get('/:id/reviews', asyncHandler(async(req,res)=>{
    const id = req.params.id
    const reviews = await Review.findAll({where: {userId:id}})
    res.json(reviews)
}))



module.exports = router
