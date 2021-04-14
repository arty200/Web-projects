//Função vs objeto

console.log(typeof Object)
console.log(typeof new Object) // new cria o objeto

const Cliente = function() {}
console.log(typeof Cliente) //Sem new é uma função
console.log(typeof new Cliente)

class Produto {} // A classe é uma forma de escrever uma função com outro nome
console.log(typeof Produto)
console.log(typeof new Produto()) //new instancia objeto apartir de uma função

//Quando se cria objeto de forma literal(com os parenteses), não se cria uma função
//e sim um objeto de forma direta

// Nome/Valor
const oi = 'ola'

function exec(){
    const oi = 'BOXTA'
    return oi
}

const cliente = {
    nome: 'Pedro',
    idade: 52,
    peso: 150.25,
    endereco: {
        lougradouro : 'Pedro',
        numero: 15200382
    }
}

console.log(cliente)

//Notacao ponto

//console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bota' // Ambas sao
obj1['nome'] = 'Bota' //A mesma coisa
//console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // Recebe nome como parametro e cria um atributo com ele
    this.exec = function(){
       // console.log('Seu merda')
    }
}
 
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

//console.log(obj1)
//console.log(obj2)
//console.log(obj3)