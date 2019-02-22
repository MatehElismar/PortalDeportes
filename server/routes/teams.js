const router = require('express').Router(),
{ team } = require('../controllers')

router.get('/', team.index)

router.post('/', team.add)
  
router.put('/', team.update)

router.delete('/:_id', team.delete)

// >> CONFERENCES
router.get('/conferences/', team.conferences.index)
router.post('/conferences/add', team.conferences.add)
router.put('/conferences/update', team.conferences.update)
router.get('/conferences/delete/:confID', team.conferences.delete)

module.exports = router;    