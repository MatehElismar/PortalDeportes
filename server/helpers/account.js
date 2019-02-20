//Funciones que se utilizan a menudo en cuando a los jugadores
'use strict'

module.exports = {
    token : '',
    user: {},
    generateToken : (username)=>{ 
        username = username.replace(/\ /g, '')  
        console.log('username', username)
        var token = ''
        for (let i = 0; i < username.length * 2; i++) {
            let pos = Math.random() * (username.length -1);
            pos = Math.round(pos);  
            token+= username[pos] 
        }
        console.log('token', token)
        return token;
    }
}