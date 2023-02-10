// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')




// Metodo some pregunta si algun elmento (como minimo uno) cumple lo que se le pregunta en el callback.

const hayAlgunMenor = users.some((user)=>{
    return user.edad < 18
})

console.log('todos son mayores de Edad?', hayAlgunMenor)





