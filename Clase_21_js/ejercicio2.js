const numeros = [100, 25, 1250, 8, 16];
let mayor = 0;

console.log(numeros)
console.log([2])

for(let i=0; i < numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i]
    }
}
console.log(`el numero mayor de los siguientes numeros: ${numeros} es ${mayor} `)
