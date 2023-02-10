// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arraySimplificat = [ 1, 3, 4, 6, 7, 12]

// Metodo SHIFT quita el primer elemento del array

const elementoQuitado = arraySimplificat.shift()

console.log('Array Final', arraySimplificat)
console.log('Elemento Quitado', elementoQuitado)