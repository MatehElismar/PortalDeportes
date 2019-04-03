'use strict' 
const helper = require('../helpers').account;

const { Team } = require('../models');
const { db } = require('../helpers');

const ctrl = {}
ctrl.index = async (req, res)=>{ 
  let teams = await Team.find().catch(db.catchError) 
  res.render('admin', { teams })
}


module.exports = ctrl