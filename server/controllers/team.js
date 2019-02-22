'use strict'
const { teams } = require('../helpers'),
{ Team, Conference } = require('../models');

const ctrl = {}
ctrl.index = async (req, res)=>{
    let teams = await Team.find();
    res.json(teams)
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
            rach: body.rach,
            idConf: body.idConf
        })

       let team = await newTeam.save()
    //    We send the team with de dbID
       res.json(team)
    } )
}

ctrl.update = (req, res)=>{ 
    teams.validate(req.body, res, async (value)=>{
        let team = await Team.findOne({_id: value._id})
        if(team){

            let updatedConf = await Team.updateOne({_id: value._id}, value)
            //    We send the team with the changes
            res.json(updatedConf)
        }
        else
        res.status(400).send('Esta conferencia no existe')        
    })
}

ctrl.delete = async (req, res)=>{
    let result = await Team.findOneAndRemove({_id: req.params._id})
    res.json({'result': result})
}

//  >>        Conferences!!
ctrl.conferences = {}
ctrl.conferences.index = async (req, res)=>{
    let conferences = await Conference.find()
    res.json(conferences)
}
ctrl.conferences.add = (req, res)=>{ 
    teams.validateConference(req.body, res, async (value)=>{
        const newConference = new Conference({
            name: value.name
        })

       let conf = await newConference.save()
    //    We send the team with de dbID
       res.json(conf)
    })
        
}

ctrl.conferences.update =  (req, res)=>{ 
    teams.validateConference(req.body, res, async (value)=>{
        let conf = await Conference.findOne({_id: value._id})
        if(conf){
            // el conferencia existe

            let updatedConf = await Conference.updateOne({_id: value._id}, value)
            //    We send the team with the changes
            res.json(updatedConf)
        }
        else
        res.status(400).send('La conferencia no existe')       
    })
}

ctrl.conferences.delete = async (req, res)=>{
    let result = await Conference.findOneAndRemove({_id: req.params.confID})
    res.json({'result': result})
}

module.exports = ctrl