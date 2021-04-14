const alunos = [
    {nome: 'Jão',nota: 7.9},
    {nome: 'Marcio',nota: 10},
    {nome: 'Jairo',nota: 8.1},
    {nome: 'Janio',nota: 5}
]
//Objetivo calcular a media
//Codigo imperativo - mais facil e direto - c like
//Foco em como deve ser feito
//Menos reuso, mais performance
let total1 = 0
for(let i =0; i< alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//Declarativo -- mais reuso de codigo -- mais dificil de construir
//Foco no que deve ser feito
//Mais reuso, provavelmente menos performance
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
