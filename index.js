// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arraySimplificat = [ 1, 3, 4, 6, 7, 12]

// Metodo POP (quita el ultimo elemento del array y me lo devuelve)

const ultimoElemento = arraySimplificat.pop()

console.log('ultimo ELemento', ultimoElemento)
console.log('el array me quedaría así', arraySimplificat)