const router = require('express').Router();
const auth = require(`../controllers/users/auth`)
const login = require(`../controllers/users/login`)
const signup = require(`../controllers/users/signup`)
const logout = require(`../controllers/users/logout`)

router.get(`/confirm`, auth)
router.post('/login', login)
router.post('/logout', logout)
router.post('/signup', signup)

router.post('/oauth/google')
router.post('/oauth/kakao')
router.post('/oauth/naver')

router.get('/confirm')






module.exports = router;