// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')



// Metodo filter. Filtra elements del array

const usersMayoresDeEdad = users.filter((user)=>{
    // Evaluará esta expresión a booleano. Si es true, pasará el filtro, si es false no lo pasara.
    return user.edad === 38
})

console.log('usersMayoresDeEdad', usersMayoresDeEdad)





