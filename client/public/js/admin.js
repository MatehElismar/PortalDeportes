'use strict' 

function goEdit(teamID){ 
    $('#submit-btn').html('Editar');
    let team = {};
    console.log('eso', teamID)
    // team.Conferencia = $(`#${teamID} .Conferencia`);
    team._id = teamID
    team.name = $(`#${teamID} .Equipo`).html();
    team.G = $(`#${teamID} .G`).html();
    team.P = $(`#${teamID} .P`).html();
    team.PTC = $(`#${teamID} .Ptc`).html();
    team.PDL = $(`#${teamID} .PDL`).html();
    team.rach = $(`#${teamID} .Rach`).html();  

    jsonToForm(team, '#team-form');
}

function submit(e){ 
    if($('#submit-btn').html() == 'Editar'){
        // Edit modo
        updateTeam();
    }
    else{
        // Add Modo
        addTeam();
    } 
}

async function addTeam(){
    let team = await formToJSON('#team-form')
    let token = localStorage.getItem('token')
    $.ajax({
        url: `/teams/${token}`,
        type: 'POST',
        data: JSON.stringify(team),
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (team)=>{ 
                team = res.team;
                alert('Elemento Agregado')
                let tr = `
                    <tr id="${team._id}"> 
                        <th>${team.name}</th> 
                        <th>${team.G}</th> 
                        <th>${team.P}</th> 
                        <th>${team.PTC}</th> 
                        <th>${team.PDL}</th> 
                        <th>${team.rach}</th>
                        <td class="Acciones">
                            <a onclick="goEdit('${team._id}')" class="editar">Editar</a> 
                            <a onclick="deleteTeam('${team._id}')" class="borrar">Borrar</a>
                        </td> 
                    </tr>
                `
                $('.table-body').append(tr);
                // Desabilitar el formulario
                $("#team-form").children().prop("disabled",true);
                // limpiamos los inputs
                $('input').val('')
            })
        }
    })
}

async function updateTeam(){
    let team = await formToJSON('#team-form')
    let token = localStorage.getItem('token')

    console.log(team)
    $.ajax({
        url: `/teams/${token}`,
        type: 'PUT',
        data: JSON.stringify(team),
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (res)=>{
                team = res.updatedTeam 
                alert('Elemento Actualizado')
                let trHTML = ` 
                        <th>${team.name}</th> 
                        <th>${team.G}</th> 
                        <th>${team.P}</th> 
                        <th>${team.PTC}</th> 
                        <th>${team.PDL}</th> 
                        <th>${team.rach}</th>
                        <td class="Acciones">
                            <a onclick="goEdit('${team._id}')" class="editar">Editar</a> 
                            <a onclick="deleteTeam('${team._id}')" class="borrar">Borrar</a>
                        </td>  
                `
                console.log(team)
                $(`.table-body #${team._id}`).html(trHTML);
                // Desabilitar el formulario
                $("#team-form").children().prop("disabled",true);
                // limpiamos los inputs
                $('input').val('')
            })
        }
    })
}

function deleteTeam(teamID){
    if(confirm('Seguro desea eliminar este equipo de la lista?')){ 
        let token = localStorage.getItem('token')
        $.ajax({
                url: `/teams/${token}/${teamID}`,
            type: 'DELETE',
            success: (res)=>{  
                ajaxSuccess(res, (res)=>{
                  location.reload()
                })
            }
        })
    }
}

