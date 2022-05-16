const express = require('express');
const router = express.Router();
const controllers = require("../controllers");


router.get('/:userId', controllers.mypage.get)
router.patch('/:userId', controllers.mypage.patch)
router.delete('/:userId', controllers.mypage.delete)



module.exports = router;