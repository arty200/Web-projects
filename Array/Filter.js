//Fillter filtrar um array para ter uma quantidade menor que obedeça um determinado padrão
//Ele cria um novo array e não altera o original
const produtos = [
    {nome: 'Notebook',preco: 2499,fragil: true},
    {nome: 'iPad',preco: 12499,fragil: false},
    {nome: 'Copo de vidro',preco: 3,fragil: true},
    {nome: 'Copo de plastico',preco: 2,fragil: false}
]

console.log(produtos.filter(function(p){ // Coloca a função para filtrar o que quiser
    return (p.preco > 200 && p.fragil == true)
}))

//implementando filter

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0;i< this.length; i++){
        if(callback(this[i],i,this)){
            newArray.push(thi[i])
        }
    }
}

