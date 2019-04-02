
enviar=document.getElementById("form");
enviar.onclick=validarDatos;

function validarDatos () {
    var elemento =document.getElementById("equipo");
    if (elemento.checkValidity() ==false && elemento.required){
    //document.getElementById("mensajes").innerHTML=`<p>Debe ingresar un ${elemento.id} valido</p>`;
    document.getElementById("mensajes").innerHTML="<p>Debe ingresar un "+elemento.id +" valido</p>";
}
}