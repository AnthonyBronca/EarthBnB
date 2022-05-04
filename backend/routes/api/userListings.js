const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Location, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();




router.get('/:id/locations', asyncHandler(async (req, res) => {
    const currentUserId = req.params.id;
    const userListings = await User.findByPk(currentUserId, {
      include: [
        {model: Location, include: [Image]}
      ]
    })
    res.json(userListings)

}))


module.exports = router
