// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')




// IndexOf, me devuelve el indice de un elemento que cumpla la condicion del callback
// Previamente uso el map para filtrar aquel campo sobre el que quiero operar

const posicionJoana = users.map((user)=> user.nombre).indexOf("Joanna")

console.log('posicion joanna en el array', posicionJoana)





