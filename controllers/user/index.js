const {Router} = require('express');
const router = Router();
const ctrl = require('./user.ctrl.js');

router.post('/', ctrl.getUser);
router.post('/login', ctrl.login);

module.exports = router;