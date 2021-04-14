//Arrays 
const valores = [7,7,7,7,7,7,7,7,7,7,7]

console.log(valores[0],valores[3])//Acessando indices
console.log(valores)//O array todo

valores[4] = 10
console.log(valores.length)

valores.push({id: 3},false,null,'teste')//Funciona mas n é ideal, criar um array para cada tipo de dados
console.log(valores)

console.log(valores.pop())//Retira do final

delete valores[0]
console.log(valores)//Cria item vazio
//Array é do tipo Object

//Object - coleção de chaves e valores

const prod1 = {}//objeto vazio
prod1.nome = 'Celular do negao'//Pode definir dinamicamente
prod1.preco = '496.852'

console.log(prod1)

//Pode ser declarado assim
const prod2 = {
    nome: "Camisa polo",
    preco: 100,
    botao:{
        tamanho: 5
    }

}

console.log(prod2)

//Json é diferente de objeto ele é um formato textual para comunicação entre sistemas