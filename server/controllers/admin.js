'use strict' 
const helper = require('../helpers').account;

const ctrl = {}
ctrl.index = async (req, res)=>{
  if(helper.token == req.params.token){
      res.render('admin')
  }
}


module.exports = ctrl