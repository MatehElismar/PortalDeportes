'use strict'
const { teams } = require('../helpers'),
{ Team, Conference } = require('../models');

const ctrl = {}
ctrl.index = async (req, res)=>{
    let teams = await Team.find();
    res.json({
        ok: true,
        teams
    })
}

ctrl.add = (req, res)=>{
    var body = req.body; 
    teams.validate(body, res, async (value)=>{
        const newTeam = new Team({
            name: body.name,
            G: body.G,
            P: body.P,  
            PTC: body.PTC,
            PDL: body.PDL,
            rach: body.rach
        })

       let team = await newTeam.save()
    //    We send the team with de dbID
       res.json({
           ok: true,
           team
       })
    } )
}

ctrl.update = (req, res)=>{ 
    teams.validate(req.body, res, async (valueToUpdate)=>{
        let team = await Team.findOne({_id: valueToUpdate._id})
        if(team){

            let result = await Team.updateOne({_id: valueToUpdate._id}, valueToUpdate)
            //    We send the team with the changes
            if(result.ok > 0)
                res.json({
                    ok: true,
                    updatedTeam : valueToUpdate
                })
            else{
                res.json({
                    ok: false,
                    msg: 'Todo se ejecuto correctamente; pero no se hallaron coincidencias'
                })
            }
        }
        else  res.json({
            ok: false,
            msg: 'Esta conferencia no existe'
        })        
    })
}

ctrl.delete = async (req, res)=>{
    let result = await Team.findOneAndRemove({_id: req.params._id})
    res.json({
        ok: true,
        'result': result
    })
}

module.exports = ctrl