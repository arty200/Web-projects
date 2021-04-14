const peso1 = 1.0
const peso2 = Number('2.0') //Converte a string para numero

//console.log(peso1,peso2)
//console.log(Number.isInteger(peso1)) //Teste para saber se é inteiro

const teste1 = 9.875
const teste2 = 6.872

const total = ((teste1*peso1) + (teste2*peso2))/(peso1+peso2)

console.log(total) // mostra a media
console.log(total.toFixed(2)) // toFixed delimita o numero de caracteres depois da virgula
console.log(total.toString()) // Converte para string
console.log(typeof total) // tipo do dado
console.log(typeof Number) // Funcao

//Cuidados:

console.log(7/0) // Tipo infinity
console.log("10"/2) // Funciona para valores numericos reconhecidos
//console.log("teste"*2)// Nao funciona
console.log(0.1 + 0.7) //Imprecisoes com ponto flutuante

//Math:
const raio = 5.6
const area = Math.PI * Math.pow(raio,2)

console.log(Math.PI * Math.pow(raio,2))
console.log(typeof Math)

