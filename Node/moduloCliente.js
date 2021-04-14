//Classe terminada com cliente utiliza outros modulos
const moduloA = require('./moduloA') // Utilizando o caminho relativo (./nomedoarquivo)
const moduloB = require('./muduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA)

console.log(moduloB)