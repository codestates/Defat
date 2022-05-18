const router = require('express').Router();
const { users } = require('../controllers');

router.get('/mypage/:userId', users.mypage.get);
router.patch('/mypage/:userId', users.mypage.patch);
router.delete('/mypage/:userId', users.mypage.delete);




module.exports = router;