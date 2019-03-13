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
                        <td class="Equipo">${team.name}</td> 
                        <td class="G">${team.G}</td> 
                        <td class="P">${team.P}</td> 
                        <td class="Ptc">${team.PTC}</td> 
                        <td class="PDL">${team.PDL}</td> 
                        <td class="Rach">${team.rach}</td>
                        <td class="Acciones">
                            <a onclick="goEdit('${team._id}')" class="editar">Editar</a> 
                            <a onclick="deleteTeam('${team._id}')" class="borrar">Borrar</a>
                        </td> 
                    </tr>
                `
                $('.table-body').append(tr); 
                // limpiamos los inputs
                $('input').val('')
            })
        }
    })
}

async function updateTeam(){
    let team = await formToJSON('#team-form')
    let token = localStorage.getItem('token')

    console.log('TEAM TO UPDATE',team)
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
                        <th class="Equipo">${team.name}</th> 
                        <th class="G">${team.G}</th> 
                        <th class="P">${team.P}</th> 
                        <th class="Ptc">${team.PTC}</th> 
                        <th class="PDL">${team.PDL}</th> 
                        <th class="Rach">${team.rach}</th>
                        <td class="Acciones">
                            <a onclick="goEdit('${team._id}')" class="editar">Editar</a> 
                            <a onclick="deleteTeam('${team._id}')" class="borrar">Borrar</a>
                        </td>  
                `
                console.log(team)
                $(`.table-body #${team._id}`).html(trHTML);
                // limpiamos los inputs
                $('input').val('')
                $('#submit-btn').html('Agregar')
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

