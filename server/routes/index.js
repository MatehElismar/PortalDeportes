'use strict'
const isLogged = require('../helpers').account.verifyUserMidleware

module.exports = (app)=>{

    // Ruta Principal De La Aplicacion.
    app.get('/', (req, res)=>{
        res.render('index');
    })
    app.get('/equipos', (req, res)=>{
        res.render('posiciones');
    })
    app.get('/noticias', (req, res)=>{
        res.render('noticias');
    })
    app.get('/account', (req, res)=>{
        res.render('login');
    })
    app.get('/junior', (req, res)=>{
        res.render('admin');
    })
    app.use('/account', require('./account'))
    app.use('/admin/:token', isLogged, require('./admin'))
    app.use('/teams/:token', isLogged, require('./teams'))
    app.use('/conferences/:token', isLogged, require('./conferences'))
    
    
}

