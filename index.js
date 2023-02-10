// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')



// Metodo ForEach itera por cada elemento y dentro de la callback function pues determino que hacer
let edadTotal = 0
users.forEach((user)=>{
    console.log('user', user)
    edadTotal = edadTotal + user.edad
})

console.log('edad total', edadTotal)





