'use strict' 
const helper = require('../helpers').account;

const ctrl = {}
ctrl.index = async (req, res)=>{ 
  res.render('admin')
}


module.exports = ctrl