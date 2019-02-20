'use strict'
const mongoose = require('mongoose');

module.exports = {
    url: 'localhost',
    db: {
        uri: (process.env.NODE_ENV == 'dev')? 'mongodb://localhost/baseball' : 'mongodb://mateh:junior01@ds159978.mlab.com:59978/baseball',
        initializeDB: async ()=>{
            // console.log('uri', )
            return await mongoose.connect(module.exports.db.uri, { useNewUrlParser: true })
            .then(res=>{
                console.log(`Connected To DB :`, res.connections[0].name);
            })
            .catch(err=>{
                console.error('There are some errors connecting to DB', err)
            })  
        }
        
    }
}