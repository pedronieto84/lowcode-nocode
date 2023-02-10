// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')

var arraySimplificat = ["Banana", "Orange", "Apple", "Mango"]

var segundoArray = ["Apple", "Melon"]

var tercerArray = ["Pears"]

// Concatenar o juntar dos arrays


const arrayTotalFrutas = arraySimplificat.concat(segundoArray, tercerArray);
console.log('arrayFInal', arrayTotalFrutas)
