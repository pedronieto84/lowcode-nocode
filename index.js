// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arraySimplificat = ["Banana", "Orange", "Apple", "Mango"]

// Cambiar un elemento de una posicion en particular

arraySimplificat[1] = "Lemon"

console.log('Array Final', arraySimplificat)
