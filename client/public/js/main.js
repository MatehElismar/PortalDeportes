'use strict'
import { login } from "../../../server/controllers/account";

 

// Funciones generales que se cargaran en toda la pagina

async function formToJSON(formID){
    let json = {}
    // Obtenemos el formulario
    let body = new FormData(document.querySelector(formID));  
    // Evitamos se que corra asincronicamente con 'async away'
   await body.forEach((value, key, parent)=>{
    //    Recorremos sus campos y guardamos los datos en un objeto json
       json[key] = value;
   })
   
//    retornamos el objeto json con los datos
   return json;

}

function ajaxSuccess(res, next){
    if(res.ok){
       next(res)
    }
    else{
        alert(res.msg)
    }
}

function login(){
    let login = formToJSON('#login-form')
    let token = localStorage.getItem('token')
    $.ajax({
        url: `/teams/${token}`,
        type: 'POST',
        body: login,
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (value)=>{
                localStorage.setItem('token', value.token)
                location = value.redirectURL;
            })
        }
    })
}