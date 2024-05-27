const frutas = [`manzana`, `bananas`, `palta`, `pera`]

console.log(frutas);
document.write(frutas);


for(let g = 0; g<frutas.length; g++){
    console.log(`tenemos` + frutas[g]);
    document.write(`tenemos`+ frutas[g] + "<br/>")
}