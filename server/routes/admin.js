const router = require('express').Router(),
{ admin } = require('../controllers') 

router.get('/:token', admin.index) 

module.exports = router; 