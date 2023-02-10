// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')



// Metodo reduce. Aplica el callback en cada elemento hacia el siguiente

const edadTotal = users.reduce((total, valorDeEstaIteracion)=>{
    // Evaluará esta expresión a booleano. Si es true, pasará el filtro, si es false no lo pasara.
    return total + valorDeEstaIteracion.edad
}, 0)

console.log('sumatorio de todas las edades', edadTotal)





