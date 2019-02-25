const router = require('express').Router(),
{ team } = require('../controllers')

router.get('/', team.index)

router.post('/', team.add)
  
router.put('/', team.update)

router.delete('/:_id', team.delete) 
module.exports = router;    