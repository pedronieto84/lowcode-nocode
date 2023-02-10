// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')



// Metodo sort para que considere correctamente los números y no se quede solamente con el metodo por defecto que los interpreta como si fueran strings.

users.sort((previo, posterior)=> {
let x = previo.nombre.toLowerCase();
let y = posterior.nombre.toLowerCase();
if (x < y) {return -1;}
if (x > y) {return 1;}
return 0;
})

console.log('ordenados por edad', users)





