let x = 1;
const cuantos = 5;
let suma = 0;

while(x <=cuantos){
    const valor = parseInt(prompt(`ingrese el valor ${x} de ${cuantos}`))
    suma += valor;
    x++
}

document.write(`la sunma de los valores es de ${suma}`);
