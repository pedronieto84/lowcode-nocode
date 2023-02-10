// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')




// Metodo Find me devuelve el elemento entero. 

const joanna = users.find((user)=>{
    return user.nombre === "Joanna"
})

console.log('objecte JOanna', joanna)





