const router = require('express').Router();
const kits = require('../controllers/kits');

router.get('/:searchText', kits.find.get)
router.get('/information', kits.information.get)
router.get('/', kits.detail.get)
router.get('/:kitId')


module.exports = router;