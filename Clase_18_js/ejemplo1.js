const empelados = [
    {
        Nombre: "Jere",
        Trabajo: "desarrollador"
    },
    {
        Nombre: "Flavia",
        Trabajo: "desarrollador"
    },
    {
        Nombre: "Juan",
        Trabajo: "abogada"
    },
    {
        Nombre: "Carlos",
        Trabajo: "maestra"
    },
    {
        Nombre: "Sofi",
        Trabajo: "veterinario"
    },
]

console.log(empelados)

const desarrollador = empelados.filter(
    empelados => empleado.trabajo == `desarrollador`
)
const nodesarrollador = empelados.filter(
    empelados => empleado.trabajo !== `desarrollador`
)

console.log(desarrollador)
console.log(nodesarrollador)