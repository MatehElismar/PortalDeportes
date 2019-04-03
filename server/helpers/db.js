'use strict'

module.exports = {

    catchError: (err)=>{
        //    If there are validation errors send an error message to the front
        return res.json({
            ok: false,
            msg: err._message
        })
    }
}