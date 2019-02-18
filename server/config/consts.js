'use strict'
const mongoose = require('mongoose');

module.exports = {
    url: 'localhost',
    db: {
        uri: 'mongodb://localhost/baseball',
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