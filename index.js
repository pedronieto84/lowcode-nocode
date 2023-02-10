// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arraySimplificat = [ 1, 3, 4, 6, 7, 12]

// Metodo toString() devuelve un string a partir de una array

const stringResult = arraySimplificat.toString()


// Metodo join() devuelve un string a partir de una array pero puedo determinar el caracter que les une

const joinResult = arraySimplificat.join('-')
console.log('joinResult', joinResult)