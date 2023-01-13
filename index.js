var users = require('./variable.json')


// Escriu el codi que em printejaria en pantalla mitjançant un console.log el nom del fill de Laura.

var filllaura = users[2].fills[0].nom
console.log('el nom del fill de Laura es', filllaura)


// La segona afició de Sheila.
var aficiolaura = users[1].aficions[1]
console.log('la segona aficio de Laura es', aficiolaura)

// Saber si Juan está casat o no.
var casadojuan = users[0].casat
console.log('Esta casat Juan es', casadojuan)

// L’edat de Laura.
var edatlaura = users[2].edat
console.log('La edat de Laura es', edatlaura)