const router = require('express').Router(),
{ team } = require('../controllers')

// >> CONFERENCES
router.get('/', team.conferences.index)

router.post('/', team.conferences.add)

router.put('/', team.conferences.update)

router.delete('/:confID', team.conferences.delete)

module.exports = router;    