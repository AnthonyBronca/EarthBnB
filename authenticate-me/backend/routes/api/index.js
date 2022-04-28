const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);






router.get('/api/csrf/resotre', (req,res)=>{
    if (process.env.NODE_ENV !== 'production') {
        router.get('/api/csrf/restore', (req, res) => {
          res.cookie('XSRF-TOKEN', req.csrfToken());
          return res.json({});
        });
      }
})






















// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });


// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         }
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );


module.exports = router;
