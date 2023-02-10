// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')



// Metodo map modifica los elementos del array

users.map((user)=>{
    user.mayorEdad = user.edad > 18 ? true : false
    delete user.fills
})

console.log('edad total', users)





