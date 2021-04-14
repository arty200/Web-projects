//Funcao sem retorno

function imprimeSoma(a,b) {
    console.log(a+b)
}

imprimeSoma(2,3)
imprimeSoma(2) // pode passar apenas um valor, o não passado é considerado undefined
imprimeSoma(2,3,4,5) //Pega apenas os dois primeiros e ignora outros parametros

//Funcao com retorno
function soma(a,b=0) { // Pode se clocar um valor padrao na funcao
    return a+b
}

console.log(soma(2,3))
console.log(soma(5)) // pega o segundo parametro como valor padrao

// Armazenando funcao em vairavel

const imprimirSoma = function(a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)

//Funcao Arrow

const soma1 = (a,b) => {
    return a+b
}

console.log(soma1(2,54))

const subtracao = (a,b) => a-b // sem chaves = funcao com apenas uma unica linha de codigo, retorna o resultado da operacao, se possivel

console.log(subtracao(3,2))

const imprimir2 = a => console.log(a)

imprimir2('TESTE')
