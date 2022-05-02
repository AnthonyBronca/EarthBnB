const express = require("express");
const router = express.Router();
const csrf = require("csurf");
const { check, validationResult } = require("express-validator");
const {User,Location, Image} = require('/Users/anthonybronca/Desktop/w14-solo/backend/db/models');
const { response } = require("express");
//const { asyncHandler, handleValidationErrors } = require("../utils");
const csrfProtection = csrf({ cookie: true });

const listPostingValidations = [
    check('address')
        .exists({checkFalsy: true})
        .withMessage("Please enter a valid street address."),
    check('city')
        .exists({checkFalsy:true})
        .withMessage('Please enter a valid city name.'),
    check('state')
        .exists({checkFalsy:true})
        .withMessage('Please select a State.'),
    check('country')
        .exists({checkFalsy:true})
        .withMessage('Please select a valid Country.'),
    check('details')
        .exists({checkFalsy:true})
        .withMessage('Please enter details on your listing. Ex: Full 4 Bed 3 Bath Home')
        .isLength({min:5})
        .withMessage('Please ensure your details has more than 5 characters.'),
    check('price')
        .exists({checkFalsy:true})
        .withMessage('Please select a listing price.')
]



router.get('/', (async(req,res)=>{
    const locations = await Location.findAll({
        include: Image
    }) //locations is an array of all location items
    //refactor these to be one .map^? i can forEach the locations array and put all the locations within an object so that we can key into it?

    return res.json(locations)
}))


router.post('/new', listPostingValidations, (async(req,res)=>{
    console.log(req.body, "this is req.body")
    const {userId, address, city, state, country, name, price} = req.body;

    // const validationErrors = validationResult(req);

    // if(validationErrors.isEmpty()){
        console.log('am i here')
        const newLocation = await Location.create({
            userId,
            address,
            city,
            state,
            country,
            name,
            price
        })
        // res.redirect("/locations");
        res.send('ok')
    // }
}))


/*
router.post(
  "/",
  questionValidators,
  asyncHandler(async (req, res) => {
    const { title, body } = req.body;

    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
      const question = await Question.create({
        userId: res.locals.user.id,
        title,
        body,
      });
      res.redirect("/questions");
    } else {
      const errors = validationErrors.array().map((error) => error.msg);
      res.render("questions-form", {
        question,
        errors,
      });
    }
  })
);

*/





















module.exports = router;

// const locationName = locations.map(location => location.name) //array of all location names: Full 4 Bed 3 Bath home
// const locationAddress = locations.map(location => location.address) //array of all location address: 9320 talbot dr.
// const locationState = locations.map(location => location.state) //array of all location states: PA,FL
// const locationCity = locations.map(location => location.city) //array of all cities: Miami, NYC
// const locationCounty = locations.map(location => location.country) //array of all countries: USA
// const price = locations.map(location => location.price)// array or all prices
// const locationOwnerId = locations.map(location => location.userId) // array of ownerId
// let usersId = []; //array of just id?
// const locationImage = await Image.findOne({
//     where: {
//         locationId: 1
//     }
// })
// const locationURL = locationImage.url
