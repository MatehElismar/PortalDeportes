//Funciones que se utilizan a menudo en cuando a los jugadores
'use strict'
const { Team, Conference } = require('../models')

module.exports = {
    validate : async (team, res, next)=>{
        let result = await Team.findOne({name: team.name})
        if(result){
            // Existe un equipo con este nombre
            res.json({ok: false, msg: "There is another team using this name..."})
        } 
        else{
            // After validation;
            console.log(team)
            next(team)
        }
    },

    validateConference : async (conf, res, next)=>{
        let result = await Conference.findOne({name: conf.name})
        if(result){
            // Existe un equipo con este nombre
            res.json({ok: false, msg: "There is another conf using this name..."})
        }
        else{
            // After validation;
            console.log(conf)
            next(conf)
        }
    }
} 