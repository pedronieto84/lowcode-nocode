// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')



// Metodo sort para que considere correctamente los números y no se quede solamente con el metodo por defecto que los interpreta como si fueran strings.

users.sort((previo, posterior)=> previo.edad - posterior.edad)

console.log('ordenados por edad', users)





