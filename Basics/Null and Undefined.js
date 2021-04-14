const a = {name: 'Teste'} //variavel a tem o endereço de memoria do objeto
const b = a //Atribuição por referencia

b.name = 'Opa' //Copia de referencia
               //tipos primitivos fazem copia por referencia



console.log(a)

let valor
console.log(valor) //Não definida mas declarada

valor = null // ausencia de valor - padrão para zerar o valor de uma variavel
console.log(valor) //Não aponta para nenhum objeto na memoria
//Variaveis nulas não podem ser acessadas com funcoes como o toString

const produto = {}

console.log(produto.preco) // Retorna undefined
console.log(produto)
produto.preco = 35.50
console.log(produto)
produto.preco = null //Nao faz com que o objeto não tenha mais o atributo, apenas coloca ele como vazio
//Para deletar usar o delete
console.log(produto.preco)
