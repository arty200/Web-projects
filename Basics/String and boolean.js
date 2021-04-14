//Strings

const teste = "Cod3r"

console.log(teste.charAt(4)) //char na posição solicitada
console.log(teste.charAt(5)) //valor vazio
console.log(teste.charCodeAt(3)) // valor na tabela ASCII
console.log(teste.indexOf('3')) // retorna o indice do valor
console.log(teste.substring(1)) // retorna a substring apartir da posicao 1
console.log(teste.substring(0,3)) // retorna a substring que esta entre(incluindo os mesmo) os indices 0 e 3
console.log('Merda '.concat(teste).concat("!"))// concatena as strings
console.log(teste.replace(3,'e'))// Substitui o numero 3 por e
console.log('Ana,Maria,Braga'.split(','))// cria um array com os elementos separados por ,
console.log('30' + 2) //concatenacao pode ser utilizada com o +

//Template string

const nome = 'TESTE'

const template = `
    Olá
    ${nome}!`

console.log(nome, template)
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... s{up('cuidado')}!`)

//Boolean

let isAtivo = true // numero diferente de 0 = true e 0 = false
console.log(isAtivo)
console.log(!!'') // string vazia e o nulo(null) são considerados como falso
//Outros falsos sao : NaN(not a number) e undefined

let name = ''
console.log(name || 'Desconhecido')

