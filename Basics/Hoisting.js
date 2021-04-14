//Hoisting - var
//Comportamento padrão de mover as declaracoes de variaveis para o topo
console.log('a=',a) //Declaraçaõ da variavel a é jogada para 'cima', para area de variaveis globais
var a =2
console.log('a=',a)

//Tambem valido para funcoes
//Hoisting - let
//let não possui hoisting
//console.log('a=',b) // Nao funciona com let
let b =2 //Com let hoisting não existe 
console.log('a=',b)