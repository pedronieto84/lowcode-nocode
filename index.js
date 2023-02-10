// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arraySimplificat = [ 1, 3, 4, 6, 7, 12]

// Metodo UNSHIFT quita el primer elemento del array

const unshift = arraySimplificat.unshift(0)

console.log('Array Final', arraySimplificat)
console.log('Elemento Quitado', unshift)