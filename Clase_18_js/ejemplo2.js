function getNameDias(mes){
    
    if (Number.isNaN(mes )) return false;

    if (mes < 1 || mes > 12) return false;

    mes--;


const data = [
    {
        Nombre:`enero`,
        Dias: 31
    },
    {
        Nombre:`febrero`,
        Dias: 28
    },
    {
        Nombre:`marzo`,
        Dias: 31
    },
    {
        Nombre:`mayo`,
        Dias: 30
    },
    {
        Nombre:`junio`,
        Dias: 31
    },
    {
        Nombre:`julio`,
        Dias: 31
    },
    {
        Nombre:`agosto`,
        Dias: 31
    },
    {
        Nombre:`septiembre`,
        Dias: 30
    },
    {
        Nombre:`octubre`,
        Dias: 31
    },
    {
        Nombre:`noviembre`,
        dias: 30
    },
    {
        Nombre:`diciembre`,
        dias: 31
    },

]
}

const numMes = parseInt(prompt(`ingreses el mes del año en numeros`, ``))

const resultado = getNameDias(numMes)

if(resultado){
    alert(`el mes ${resultado.Nombre} tiene ${resultado.dias} dias.` )
} else {
    alert(`Mes invalido`)
}