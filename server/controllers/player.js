'use strict'
const { players } = require('../helpers'),
{ Player } = require('../models');

const ctrl = {}
ctrl.index = async (req, res)=>{
    let players = await Player.find();
    res.json(players)
}

ctrl.add = async (req, res)=>{
    var body = req.body;
    if(players.validate(body)){
        const newPlayer = new Player({
            name: body.name,
            pos: body.pos,
            avg: body.avg,  
            hr: body.hr,
            rbi: body.rbi
        })

       let player = await newPlayer.save()
    //    We send the player with de dbID
       res.json(player)
    } 
    else{
        res.status(400).send('Hubieron problemas con los datos ingresados')
    }
}

ctrl.update = async (req, res)=>{
    let body = req.body;
    if(players.validate(body)){
        let player = await Player.findOne({_id: body._id})
        if(player){
            // el jugador existe
            // {{se necesita verificar las formas de interactuar con la base de datos.. en mongoose}}
            // const toUpdatePlayer = new Player({
            //     _id: body._id,
            //     name: body.name,
            //     pos: body.pos,
            //     avg: body.avg,
            //     hr: body.hr,
            //     rbi: body.rbi
            // })

            let updatedPlayer = await Player.updateOne({_id: body._id}, body)
            //    We send the player with the changes
            res.json(updatedPlayer)
        }
        else
        res.status(400).send('El jugador no existe')        
    }
    else{
        res.status(400).send('Hubieron problemas con los datos ingresados')
    }
}

ctrl.delete = async (req, res)=>{
    let result = await Player.findOneAndRemove({_id: req.params._id})
    res.json({'result': result})
}


module.exports = ctrl