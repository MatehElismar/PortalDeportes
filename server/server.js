'use strict'
const express = require('express'),
exphbs = require('express-handlebars'),
enroute = require('./routes'),
path = require('path');

// Initialize The Server
const app = express();

//Settings
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, '../client/views'))
app.set('view engine', '.hbs')
//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/public', express.static(path.join(__dirname, '../client/public')))
app.engine('.hbs',exphbs({ 
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), './layouts'),
    partialsDir: path.join(app.get('views'), './partials'),
    defaultLayout: 'main',
    helpers: path.join(__dirname, './helpers')
}))

//routes
enroute(app);


app.listen(app.get('port'), (hostname)=>{
    console.log(`Server running on ${hostname || 'localhost'}:${app.get('port')}`);
})