const express = require("express");
const router = express.Router();
const {User,Location, Image, Review} = require('../../db/models');
const asyncHandler = require('express-async-handler');

router.delete('/:id', asyncHandler(async(req,res)=> {
    const id = req.params.id

    const item = await Review.findByPk(id)
    const deletedItem = item
    await item.destroy();
    res.json(deletedItem)
}))


module.exports = router
