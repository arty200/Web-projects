const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //Cria direto o objeto, o mesmo objeto
//Modificando A tambem modifica o B

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)//Utiliza da função factory para criar objetos diferentes
//Modificando o C não altera o D