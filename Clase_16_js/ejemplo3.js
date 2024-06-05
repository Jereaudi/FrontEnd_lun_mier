const formulario = document.getElementById(`formulario`);

formulario.addEventListener(`Submit`, function(e){
    e.preventDefault();

    if(e.currentTarget.nombre.value == ``) {
        alert(`el campo nombre es requerido`)
        return;
    }

    if(e,currentTarget.mensaje.value == ``){
        alert(`El campo mensaje es requerido`);
        return
    }

    alert(`gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente mensaje: ${e.currentTarget.menssaje.value}`)
})  