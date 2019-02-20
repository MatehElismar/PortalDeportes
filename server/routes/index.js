'use strict'

module.exports = (app)=>{

    // Ruta Principal De La Aplicacion.
    app.get('/', (req, res)=>{
        res.render('index');
    })

    app.use('/players', require('./players'))
    app.use('/account', require('./account'))
    app.use('/admin', require('./admin'))
    
}