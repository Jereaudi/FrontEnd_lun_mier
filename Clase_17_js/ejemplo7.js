const datosUsuarios = [
    {
        Nombre: "Jere",
        password: "1234"
    },
    {
        Nombre: "Clara",
        password: "2121"
    },
    {
        Nombre: "Flavia",
        password: "2222"
    },
    {
        Nombre: "Virginia",
        password: "3333"
    },
    {
        Nombre: "Juan",
        password: "4444"
    },


]

const password = datosUsuarios.map(function(p){
    return p.password
})


console.log(datosUsuarios)