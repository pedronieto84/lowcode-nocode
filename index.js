// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arrayNumbers = [1,  3, 23, 5, 0, -1, 2]

// Metodo sort para que considere correctamente los números y no se quede solamente con el metodo por defecto que los interpreta como si fueran strings.

arrayNumbers.sort((a, b) => a-b)

console.log('arrayNumbers', arrayNumbers)





