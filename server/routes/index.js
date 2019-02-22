'use strict'

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

    app.use('/account', require('./account'))
    app.use('/admin', require('./admin'))
    app.use('/teams', require('./teams'))
    
    
}

