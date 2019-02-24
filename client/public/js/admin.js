'use strict' 

function selectOperation(op){
    let submit = document.querySelector('#submit-btn')
    if(op == 'add')
        submit.addEventListener('click', addTeam)
    else
        submit.addEventListener('click', updateTeam)

    // Activamos el formulario nuevamente
    $("#team-form").children().prop("disabled",false);
}

function addTeam(){
    let team = formToJSON('#team-form')
    let token = localStorage.getItem('token')
    $.ajax({
        url: `/teams/${token}`,
        type: 'POST',
        body: team,
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (team)=>{
                console.log(value)
                alert('Elemento Agregado')
                let tr = `
                    <tr id=${team._id}>
                        <th>${team.conf}</th> 
                        <th>${team.name}</th> 
                        <th>${team.G}</th> 
                        <th>${team.P}</th> 
                        <th>${team.PTC}</th> 
                        <th>${team.PDL}</th> 
                        <th>${team.rach}</th>
                    </tr>
                `
                document.querySelector('#table-body')
                .append(tr);
                // Desabilitar el formulario
                $("#team-form").children().prop("disabled",true);
                // limpiamos los inputs
                $('input').val('')
            })
        }
    })
}

function updateTeam(){
    let team = formToJSON('#team-form')
    let token = localStorage.getItem('token')
    $.ajax({
        url: `/teams/${token}`,
        type: 'PUT',
        body: team,
        "contentType": "application/json",
        success: (res)=>{
            ajaxSuccess(res, (team)=>{
                console.log(value)
                alert('Elemento Actualizado')
                let trHTML = `
                        <th>${team.conf}</th> 
                        <th>${team.name}</th> 
                        <th>${team.G}</th> 
                        <th>${team.P}</th> 
                        <th>${team.PTC}</th> 
                        <th>${team.PDL}</th> 
                        <th>${team.rach}</th> 
                `
                document.querySelector(`#table-body #${team._id}`)
                .innerHTML(trHTML);
                // Desabilitar el formulario
                $("#team-form").children().prop("disabled",true);
                // limpiamos los inputs
                $('input').val('')
            })
        }
    })
}

function deleteTeam(e){
    if(confirm('Seguro desea eliminar este equipo de la lista?')){
        let teamID = e.target.parentNode.id;
        let token = localStorage.getItem('token')
        $.ajax({
                url: `/teams/${token}/${teamID}`,
            type: 'DELETE',
            body: team,
            "contentType": "application/json",
            success: (res)=>{
                ajaxSuccess(res, (value)=>{

                    console.log(value)
                    console.log('Equipo eliminado;')
                })
            }
        })
    }
}

