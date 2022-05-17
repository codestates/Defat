const router = require('express').Router();
const { users } = require('../controllers');


router.post('/login', users.login)
router.post('/logout', users.logout)
router.post('/signup', users.signup)



module.exports = router;