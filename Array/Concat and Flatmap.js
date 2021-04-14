//Concat
const filhas = ['Ualeskah','Cibalena']
const filhos = ['Uoxin','Tamanduá']
const todos = filhas.concat(filhos) // concatena ambos os arrays colocando filhas como primeiro
console.log(todos,filhas,filhos)
console.log(['a','b'].concat([1,2],[3,4],5,[[6,7]]))

//FlatMap
const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome:'Gustavo',
        nota: 8.1
    },{
        nome:'AnaL eal',
        nota: 0.5
    }]
},{
    nome: 'Turma m2',
    alunos: [{
        nome:'Leticia',
        nota: 4.1
    },{
        nome:'Matias',
        nota: 9.5
    }]  
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

//O flatmap tem como funcionalidade principal transformar um array de arrays em apenas um array
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)