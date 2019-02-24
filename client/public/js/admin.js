'use strict'

function updateTeam(){
    let team = formToJSON('#team-form')
    let token = localStorage.getItem('token')
    $.ajax({
        url: `/teams/${token}`,
        type: 'POST',
        body: team,
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (value)=>{
                console.log(value)
            })
        }
    })
}

function deleteTeam(){
     let team = formToJSON('#team-form')
    let token = localStorage.getItem('token')
    $.ajax({
        url: `/teams/${token}`,
        type: 'POST',
        body: team,
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (value)=>{
                console.log(value)
            })
        }
    })
}

function getTeams(){
   let token = localStorage.getItem('token')

    $.ajax({
        url: `/teams/${token}`,
        type: 'GET',  
        success: (res)=>{
            ajaxSuccess(res, (valueS)=>{
                console.log(valueS)
            })
        }
    })
}

function addConf(){
     let conf = formToJSON('#conf-form')
    let token = localStorage.getItem('token')
    $.ajax({
        url: `/conferences/${token}`,
        type: 'POST',
        body: conf,
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (value)=>{
                console.log(value)
            })
        }
    })
}

function updateConf(){
    let conf = formToJSON('#conf-form')
   let token = localStorage.getItem('token')

   $.ajax({
       url: `/conferences/${token}`,
       type: 'PUT',
       body: conf,
       "contentType": "application/json",
       success: (res)=>{
           ajaxSuccess(res, (value)=>{
               console.log(value)
           })
       }
   })
}

function getConfs(){
   let token = localStorage.getItem('token')

   $.ajax({
       url: `/conferences/${token}`,
       type: 'GET',
       success: (res)=>{
           ajaxSuccess(res, (value)=>{
               console.log(value)
           })
       }
   })
}

function deleteConf(){

   let token = localStorage.getItem('token')
   let confID = ''//conferencia ID

   $.ajax({
       url: `/conferences/${token}/${confID}`,
       type: 'DELETE',
       success: (res)=>{
           ajaxSuccess(res, (value)=>{
               console.log(value)
           })
       },
       error: (err)=>{
           console.error(err);
       }
   })
}