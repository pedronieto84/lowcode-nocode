// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')


// Saber la edad de pedro.

var edadPedro = users[0].edad 
console.log('edad de pedro es', edadPedro)


// Saber el nombre del segundo usuario.
var nombreSegundoUsuario = users[1].edad
console.log('nombre segundo usuario', nombreSegundoUsuario)

// Saber el nom de el segon/a fill/a de Laura
var nombreSegundoFillLaura = users[1].fills[1]
console.log('Nombre segona filla de Laura', nombreSegundoFillLaura)