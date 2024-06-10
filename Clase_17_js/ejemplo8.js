const alumnos = [
    {
        Nombre: "Jere",
        edad: 3
    },
    {
        Nombre: "Pablo",
        edad: 5
    },
    {
        Nombre: "Nacho",
        edad: 2
    },
    {
        Nombre: "Marcos",
        edad: 8
    },
    {
        Nombre: "Flavia",
        edad: 9
    },
    {
        Nombre: "Pedro",
        edad: 12
    },
]

console.log(alumnos)

const chicos = alumnos.filter(alumnos => alumnos.edad >4)
console.log(chicos)

for(let i = 0; i < chicos.length; i++){
    document.write(`<li> niño: ${chicos[i].Nombre}, cuya edad es ${chicos[i].edad}</li>`)
}

