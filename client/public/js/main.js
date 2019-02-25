'use strict'

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

function jsonToForm(json, formID){
    let form = document.querySelector(formID); 
    Object.keys(json).forEach(key=>{ 
        form.elements[key].value = json[key]; 
    })
}

function ajaxSuccess(res, next){
    if(res.ok){
       next(res)
    }
    else{
        alert(res.msg)
    }
}

function showError(err){
    console.log(err);
}

async function login(){
    let login = await formToJSON('#login-form') 
    console.log(login)

    $.ajax({
        url: `/account/login`,
        type: 'POST',
        data: JSON.stringify(login),
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (value)=>{
                localStorage.setItem('token', value.token)
                location = value.redirectURL;
            })
        }
        ,
        error: showError
    })
}