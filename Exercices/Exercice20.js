function troca(vetA,vetB){

    if(Object.keys(vetA).length == Object.keys(vetB).length){
        vetB.push(vetA[0])
        vetA[0] = vetB[0]
        vetB[0] = vetB.pop()
        return [vetA,vetB]
    }else{
        return `tamanhos diferentes`
    }
}

console.log(troca([1,2,3],[4,5,6]))
console.log(troca([25,2],[1]))