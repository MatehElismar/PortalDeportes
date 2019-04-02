'use strict'
const isLogged = require('../helpers').account.verifyUserMidleware
const { Team } = require('../models')

module.exports = (app)=>{

    // Ruta Principal De La Aplicacion.
    app.get('/', (req, res)=>{
        res.render('index');
    })

    app.get('/equipos', async (req, res)=>{
        let teams = await Team.find();
        res.render('posiciones', { teams });
    })

    app.get('/noticias', (req, res)=>{
        res.render('noticias');
    })

    app.get('/graficas', (req, res)=>{
        res.render('graficas');
    })

    app.get('/login', (req, res)=>{
        res.render('login');
    })


    app.use('/account', require('./account'))
    app.use('/admin/:token', isLogged, require('./admin'))
    app.use('/teams/:token', isLogged, require('./teams')) 
    
    
}

