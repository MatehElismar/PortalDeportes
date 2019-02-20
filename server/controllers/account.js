'use strict' 
const helper = require('../helpers').account;

const ctrl = {}
ctrl.index = async (req, res)=>{
  
}

ctrl.login = async (req, res)=>{
    if(req.body.email == 'admin@admin.com' && req.body.pass == '1234'){
        helper.token = helper.generateToken('Mateh Elismar & Saw Polanco')
        helper.user = {
            name: 'Mateh Elismar & Saw Polanco'
        }

        res.json({
            ok: true,
            token: helper.token
        })
    }
    else{
        res.json({
            ok: false,
            msg: 'Incorrect User or Password'
        })
    }
}


module.exports = ctrl