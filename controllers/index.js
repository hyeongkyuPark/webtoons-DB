const {Router} = require('express');
const router = Router();

router.use('/user', require('./user'));
router.use('/mytoon', require('./mytoon'))

module.exports = router;