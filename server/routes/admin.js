const router = require('express').Router(),
{ admin } = require('../controllers') 

router.get('/', admin.index) 

module.exports = router; 