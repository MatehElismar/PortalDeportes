'use strict' 
const helper = require('../helpers').account;
const { Team } = require('../models');

const ctrl = {}
ctrl.index = async (req, res)=>{ 
  let teams = await Team.find();
res.render('admin', { teams })
}


module.exports = ctrl