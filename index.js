// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

// Metodo Array.from devuelve un array a partir de un iterable (string, number...)
const nombre = "Pedro"

const arrayNombre = Array.from(nombre)

console.log('Array a partir de un string', arrayNombre)





