const express = require('express');
const router = express.Router();
const auth = require(`../controllers/users/auth`)
const login = require(`../controllers/users/login`)
const signup = require(`../controllers/users/signup`)
const logout = require(`../controllers/users/logout`)

router.get(`/auth/confirm`, auth)
router.post('/auth/login', login)
router.post('/auth/logout', logout)
router.post('/auth/signup', signup)

// router.post('/oauth/google')
// router.post('/oauth/kakao')
// router.post('/oauth/naver')








module.exports = router;