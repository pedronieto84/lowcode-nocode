// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arraySimplificat = ["Banana", "Orange", "Apple", "Mango"]

// Metodo slice, corta y añade elementos dentro de otro array

const arrayCortado = arraySimplificat.slice(1,3)
console.log('array cortado', arrayCortado)



