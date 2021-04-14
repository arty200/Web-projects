//Operadores

//Atribuição

const a = 7
let b = 12
//acumula
b += a
console.log(b)
//subtrai a e b e guarda em b
b -=a
console.log(b)
//multiplica b por 2 e guarda em b
b *= 2
console.log(b)
//divide b por 2 e guarda em b
b /= 2
console.log(b)
//Pega o resto da divisao de b por 2 e guarda em b
b %= 2
console.log(b)

//Destructuring - Desestruturação

//Usando para remover atributos de objetos
const pessoa = {
    nome : 'Ana',
    idade : 50,
    endereco:{
        lougradouro: 'Rua do ABC',
        numero: 10000
    }
}

const {nome : n,idade : i} = pessoa // tirar de dentro do objeto nome e idade e cria as variaveis n e i, com nome e idade respectivamente
console.log(n,i)    

const { sobrenome: s ,mauHumorada : h = true}  = pessoa //caso o dado não exista retorna undefined e pode ser colocado um valor padrao para o dado
console.log(s,h)

const {endereco: {logradouro:l,numero:numbro,cep = 0.0000000}} = pessoa //Usado dessa forma para dados aninhados
console.log(l,numbro,cep)

//Usando destructuring em arrays
//const[a0] = [10]
//console.log(a0)

const [n1,,n3,,n5,,n7,n8 = 0] = [10,7,9,8]//utiliza conchetes para desestruturar arrays
console.log(n1,n3,n5,n7,n8)

//Arrays de arrays
const [,[,nota1,nota2]] = [[1,2],[45,82.7,99.99]]
console.log(nota1)

//Exemplos diferenciados
//Nivel de função
function rand({min =0,max = 1000}){//Passa objeto para função, porem ele vai esta desestruturado
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj0 = {max: 50, min: 40}
console.log(rand(obj0))//passa os parametros do objeto
console.log(rand({}))//passa obj vazio, pega os valores pré definidos
//console.log(rand()) //Erro, tenta desestruturar algo que não existe

//Nivel de array

function radomizador([min = 0, max = 1000]){
    if(min > max) [min,max] = [max,min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
console.log('Novo teste')
console.log(radomizador([50,40])) // Usa os atributos passados
console.log(rand([992])) //pega o parametro como max
console.log(rand([])) //pega os parametros base
console.log(rand([,10])) //Pega o parametro como min, fazendo a inversao
//console.log(rand()) //Nao funciona

//Operadores aritméticos
{
    const [a,b,c,d] = [3,5,1,15]
    const soma = a+b+c+d
    const subtracao = a-b-d-c
    const multi = a*b*c*d
    const divisao = a/b/c/d
    const modulo = a % 2
    console.log(soma,subtracao,multi,divisao,modulo)
}

//Operadores relacionais - resultado sempre boolean
console.log('\n')
console.log('01)','1' == 1) // Sao iguais
console.log('02)','1' === 1) //Nao sao estritamente iguais, pois o primeiro 1 é string e o segundo é numero
console.log('03)','3' != 3) // Vai dar falso pois eles sao iguais
console.log('04)','3' !== 3)//Vai dar verdadeiro, pois os tipos diferem e sendo assim n sao estritamente iguais
//Comparacoes basicas
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)// Data de referencia da linguagem
const d2 = new Date(0)

//Ambos vao comparar referencias de memoria e gerar falso como resultado
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())//Mesmo tempo, exatamente igual
console.log('12)', undefined === null)//Tipos diferentes entao false

//Operadores logicos
function compras(trabalho1,trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = !!(trabalho1 ^ trabalho2)// xor, or esclusivo
    const manterSaudavel = !compraSorvete // operador unario
    return {compraSorvete,comprarTV32,comprarTV50,manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

//Operadores unarios

{
    let num1 = 1
    let num2 = 2
    num1++ //Soma 1 com menos prioridade
    --num2 //Subtrai 1 com maior prioridade

    console.log(++num1 === num2--)
}

//exponenciação

{
    let exp = 2 ** 25
    let expOrig = Math.pow(2,25)
    console.log(exp === expOrig)
}

//Operadores ternarios
//O operador ternario serve para retornar algo em resposta a uma expressao logica
// dividido em tres partes : expressao logica ? retorno caso expressao verdadeira : retorno caso expressao falsa
const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(6.7))
