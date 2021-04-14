//Serve para transformar um array em outra coisa, como um unico elemento, dois elementos  acumulador e elemento atual

const alunos = [
    {nome: 'Jão',nota: 7.1,bolsista: false},
    {nome: 'Maria',nota: 9.5,bolsista: true},
    {nome: 'Abelardo',nota: 6.8,bolsista: false},
    {nome: 'Paunucu',nota: 2.1,bolsista: true}
]

console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)

//Todos bolsistas
const resultado1 = alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
    //console.log(acumulador, atual)
    return acumulador
})
console.log(resultado1)

//Algum é bolsista
const resultado2 = alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
    if(atual == true){
        return atual
    }else{
        return acumulador
    }
    
})
console.log(resultado2)

//Implementando o reduce
Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 1;i<this.length;i++){
        acumjulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

const soma = (total,valor) => total + valor
const nums = [1,2,3,4,5]
console.log(nums.reduce2(soma))