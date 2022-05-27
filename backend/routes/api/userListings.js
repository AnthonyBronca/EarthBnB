const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Location, Image, Booking, Sequelize } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.get('/:id/bookings', asyncHandler(async (req, res)=>{
  const id = req.params.id
    const userBookings = await User.findByPk(id, {
      include: [
        {model: Booking,
          include: [{model: Location,
            where: Location.id === Booking.locationId,
              include: {model: Image,
                where: Image.locationId === Booking.locationId}}]}
      ]
    })
    return res.json(userBookings)
}))


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
