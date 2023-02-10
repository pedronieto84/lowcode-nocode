// Ejemplo de objeto JSON de tipo usuario esta en el archivo user.json

var users = require('./user.json')



// 
// Metodo every aplica un test a cada uno de los elementos y me devuelve un booleano en función de si todos lo han pasado o no

const todosCumlenEsteRequisito = users.every((user)=>{
    return user.edad > 18
})

console.log('todos son mayores de Edad?', todosCumlenEsteRequisito)





