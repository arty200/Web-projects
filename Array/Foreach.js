//Uso do foreach
const aprovados = ['Agatha','Aldo','Gertrudes','Rafael']

//Pode-se passar um funcao como parametro para ser realizada
aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1} ${nome}`)
})

//Pode se passar uma arrow function de forma simplicada como parametro
aprovados.forEach(nome => console.log(nome))//Funcao chamada para cada elemento passando o nome e o indice

//Pode-se passar uma funcao para uma constante e entao passar como parametro para o foreach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//Foreach possui tres parametros que são: o nome do atributo a ser trabalhado, o indice e o proprio array
//Implementar o proprio for each

Array.prototype.forEach2 = function(callback){
    for(let i=0;i< this.length;i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1} ${nome}`)
})
