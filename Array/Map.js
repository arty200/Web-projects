const nums = [1,2,3,4,5]

//mapa é uma coleção de elementos, gera um novo array
let resultados = nums.map(function(e){
    return e * 20
})

console.log(resultados,nums)

const soma10 = e => e+10 //Aroow function tem return implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // cada chamada de map gera um novo array e o array final é passado para resltado
console.log(resultado)

//Implementando map
Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Burracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 5.50}',
    '{"nome": "Câneta","preco": 1.45}'
]
//retorna um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado1 = carrinho.map2(paraObjeto)
console.log(resultado1)

