const {Router} = require('express');
const router = Router();
const ctrl = require('./mytoon.ctrl.js')

router.post('/', ctrl.post_mytoon);
router.get('/all', ctrl.get_all);
router.get('/id', ctrl.get_my_toon);


module.exports = router;