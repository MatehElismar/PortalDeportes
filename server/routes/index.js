'use strict'

module.exports = (app)=>{

    // Ruta Principal De La Aplicacion.
    app.get('/', (req, res)=>{
        res.render('index');
    })

    app.use('/account', require('./account'))
    app.use('/admin', require('./admin'))
    app.use('/teams', require('./teams'))
    
}