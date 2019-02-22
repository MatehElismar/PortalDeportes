'use strict'
const { teams } = require('../helpers'),
{ Team } = require('../models');

const ctrl = {}
ctrl.index = async (req, res)=>{
    let teams = await Team.find();
    res.json(teams)
}

ctrl.add = async (req, res)=>{
    var body = req.body;
    if(teams.validate(body)){
        const newTeam = new Team({
            name: body.name,
            pos: body.pos,
            avg: body.avg,  
            hr: body.hr,
            rbi: body.rbi
        })

       let team = await newTeam.save()
    //    We send the team with de dbID
       res.json(team)
    } 
    else{
        res.status(400).send('Hubieron problemas con los datos ingresados')
    }
}

ctrl.update = async (req, res)=>{
    let body = req.body;
    if(teams.validate(body)){
        let team = await Team.findOne({_id: body._id})
        if(team){
            // el jugador existe
            // {{se necesita verificar las formas de interactuar con la base de datos.. en mongoose}}
            // const toUpdateTeam = new Team({
            //     _id: body._id,
            //     name: body.name,
            //     pos: body.pos,
            //     avg: body.avg,
            //     hr: body.hr,
            //     rbi: body.rbi
            // })

            let updatedTeam = await Team.updateOne({_id: body._id}, body)
            //    We send the team with the changes
            res.json(updatedTeam)
        }
        else
        res.status(400).send('El jugador no existe')        
    }
    else{
        res.status(400).send('Hubieron problemas con los datos ingresados')
    }
}

ctrl.delete = async (req, res)=>{
    let result = await Team.findOneAndRemove({_id: req.params._id})
    res.json({'result': result})
}


module.exports = ctrl