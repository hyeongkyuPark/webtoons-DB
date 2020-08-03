const {Router} = require('express');
const router = Router();
const ctrl = require('./mytoon.ctrl.js')

router.post('/', ctrl.post_mytoon);
router.get('/all', ctrl.get_all)


module.exports = router;