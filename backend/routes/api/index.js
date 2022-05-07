const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const locationRouter = require('./locations')
const userListingsRouter = require('./userListings')
const reviewsRouter = require('./reviews')
const reviewRouter = require('./review')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/locations', locationRouter)
router.use('/user', userListingsRouter)
router.use('/user', reviewsRouter)
router.use('/reviews', reviewRouter)


router.get('/api/csrf/restore', (req,res)=>{
    if (process.env.NODE_ENV !== 'production') {
        router.get('/api/csrf/restore', (req, res) => {
          res.cookie('XSRF-TOKEN', req.csrfToken());
          return res.json({});
        });
      }
})




module.exports = router;
