'use strict'
const mongoose = require('mongoose');
// Uses the local DB
// process.env.NODE_ENV = 'dev'

module.exports = {
    url: 'http://localhost:4000',
    db: {
        uri: (process.env.NODE_ENV == 'dev')? 'mongodb://localhost/baseball' : 'mongodb://mateh:junior01@ds159978.mlab.com:59978/baseball',
        initializeDB: async ()=>{
            // console.log('uri', )
            return await mongoose.connect(module.exports.db.uri, { useNewUrlParser: true })
            .then(res=>{
                console.log(`Connected To DB : `+  res.connections[0 ].name+' in '+ module.exports.db.uri);
            })
            .catch(err=>{
                console.error('There are some errors connecting to DB '+ module.exports.db.uri, err)
            })  
        }
        
    }
}