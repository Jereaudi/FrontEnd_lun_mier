function validarform(){
    const nombreValidado = true;
    const passWordValido = validarlargo(document.forms.text1.value, 5)

    console.log(nombreValidado,passWordValido)

    const resultado = nombreValidado && passWordValido;
    if (resultado){
        alert(` ES VALIDO `)
    }else{
        alert(` NOOO ES VALIDO `)
    }
}



function validarlargo(texto, LargoRequerido){
    return texto.length >= LargoRequerido
}