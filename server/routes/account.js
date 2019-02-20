const router = require('express').Router(),
{ account } = require('../controllers') 

router.post('/login', account.login) 

module.exports = router; 