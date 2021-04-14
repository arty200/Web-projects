//Deve-se ter cuidado quando utilizar o global
global.MinhaApp = Object.freeze({ // Tudo que for adicionado ao global, e possivel acessar de qualquer outro arquivo no sistema
    saudacao(){
        return 'oi'
    },
    nome: 'Sistema legal'
}) //Utiliza- se o freeze para impedir que este metodo global seja alterado por outros metodos locais

//this
console.log(this === global) // falso o this é a referencia exata de module.exports ou exports que é estritamente igual a module.exports

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports) //Dentro de uma função this aponta para global
    console.log(this === module.exports)
    console.log(this === global) // true
}

logThis()

//Passando parametros para modulos
module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}`)
}