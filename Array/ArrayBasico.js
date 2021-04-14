//Array em JS é um objeto
//Ele é dinamico, pode ter muitos tipos de dados em um mesmo array, porem nao é recomendado

//Primeira forma de criação de array
let aprovados = new Array('Ana','Leal','Gertrudes','Guilhermina')
console.log(aprovados)

//Forma literal - recomendado
aprovados = ['Bia','Carlos','Joaquim']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//Valido, porem mostra undefined pois esta fora do array

aprovados[3] = 'Paulo' //Adiciona elemento pelo indice
aprovados.push('Albion Online') //Metodo recmendado para adicionar em array
console.log(aprovados.length)

//É possivel fazer isso
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)//indices que não tem valor atribuido existem, mas são undefined
console.log(aprovados)

//Ordenação em arrays
aprovados.sort() // Ordena strings em ordem alfabetica, alterando o array original
console.log(aprovados)

//Deletando elemento
delete aprovados[1] // A posicao onde o elemento foi deletado fica undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia','Carlos','Joaquim']
aprovados.splice(1,1)//Primeiro elemento, indice que se quer começar e o segundo quantos elementos se quer exculir
console.log(aprovados)
//Neste caso ele vai excluir o elemento[1] e vai colocar 'Elemento' no lugar
aprovados.splice(1,1,'Elemento')//Pode se adcionar elementos colocando depois
console.log(aprovados)

const pilotos = ['Vettel','Alonso','Massa','Hamilton Mourao']
pilotos.pop()// Remove o ultimo elemento do array

pilotos.push('Hamilton')// Adiciona elemento no final da lista

pilotos.shift() //remove do inicio
console.log(pilotos)

pilotos.unshift('Verstappen') // Adiciona no inicio

//Usando splice
//adicionando, na posição 1
pilotos.splice(1,0,'Bottas','Macarrão','Zebedeu')
console.log(pilotos)

//Removendo, no indice 3
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Cria um novo array com os elementos a apartir do indice passado
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)//Cria um array com os elementos do indice 1 ao 3(o 4 não sera incluido)
console.log(algunsPilotos2)

//Simulando array com objeto
const quaseArray = { 0: 'Rafael',1: 'Ana',2:'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Rafael','Ana','Bia']
console.log(quaseArray.toString(),meuArray)