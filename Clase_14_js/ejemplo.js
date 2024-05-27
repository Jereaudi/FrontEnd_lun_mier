const nombre = prompt("ingrese su nombre", "")
const nota = parseInt(prompt("ingrese su nota", ""))

if(Number.isNaN(nota)){
    document.write("la nota no es validada")
} else if(nota>=4){
    document.write(`${nombre} estas aprobada/o con nu ${nota}`)
} else{
    document.write(`${nombre} estas desaprobada/o con nu ${nota}`)
}

