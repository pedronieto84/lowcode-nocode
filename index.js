// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arraySimplificat = [ 1, 3, 4, 6, 7, 12]

// Metodo PUSH añade un elemento al final del array

const añadoElemento = arraySimplificat.push(23)

console.log('Primer Array', arraySimplificat)
console.log('Segon Array', añadoElemento)