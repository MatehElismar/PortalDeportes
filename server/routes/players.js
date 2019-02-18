const router = require('express').Router(),
{ player } = require('../controllers')

router.get('/', player.index)

router.post('/', player.add)
  
router.put('/', player.update)

router.delete('/:_id', player.delete)

module.exports = router;    