//Basico

var teuCu = 3
let bosta = 4 // melhor forma de criar variaveis

bosta = 40

//console.log(teuCu,bosta)

const cuzinho = 25 // Nao pode atribuir outros valores

//console.log(cuzinho)

let qualquer = 'Legal'
//console.log(qualquer)
//console.log(typeof qualquer)

qualquer = 5.8599524

//console.log(qualquer)
//console.log(typeof qualquer)

qualquer = false

//console.log(qualquer)
//console.log(typeof qualquer)

//Variaveis com var
{
    var sera = 'sera'
}

console.log(sera) // variavel visivel fora do bloco, no caso da variavel var
//Dentro de blocos que nao sejam funcoes ela é visivel para todos que estao fora do bloco

function teste(){
    var local = 123
}
teste()
//console.log(local) // Nao funciona, variavel fora de escopo
//Variavel fora de funcao é global, dentro de função é local

var numero = 1
{
    var numero = 2 
    console.log('dentro =',numero) //Pode se passar varios parametros e todos serão impressos
}
console.log('fora =', numero)
//Ambas iguais, sobrescrita

//Variaveis com Let

var numbro = 1
{
    let numbro = 2 //O let tem escopo apenas dentro do bloco
    console.log('dentro =',numbro)
}
console.log('dentro =',numbro) // Fora do bloco o 'numbro' anterior é mantido

//Let tem escopo de bloco