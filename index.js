

const valorSucio = "34,23€"

const arrayOfStrings = Array.from(valorSucio)

// Quitar el ultimo caracter.

const stringSinEuro = valorSucio.slice(0, valorSucio.length - 1)
console.log('string sin euro', stringSinEuro)

// Convertirlo a Array

const arrayNum = Array.from(stringSinEuro)

// Utilizar algun metodo de array para cambiar la ',' por un '.'

// ENcontrar posicion de la coma

const posicionComa = arrayNum.findIndex((item)=> item === ',')

// Substituir directamente en el array ese elemento
arrayNum[posicionComa] = '.'



// Convertir el array a String



const join = arrayNum.join('')



// Convertir el string a Float

const valorLimpio = parseFloat(join)
console.log('fin string', valorLimpio)




