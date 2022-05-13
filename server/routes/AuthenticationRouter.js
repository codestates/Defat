const express = require('express');
const router = express.Router();
const auth = require(`../controllers/users/auth`)
const login = require(`../controllers/users/login`)

router.post('/login',)
router.get('/confirm')
router.post('/logout')
router.post('/signup')
router.post('/oauth/google')
router.post('/oauth/kakao')
router.post('/oauth/naver')







module.exports = router;