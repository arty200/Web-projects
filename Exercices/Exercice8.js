function pontuacoes(pontuacoes){
    let array = pontuacoes.split(' ').map(Number)
    let melhor = array[0]
    let pior = array[0]
    let contM = 0,contP = 0
    
    for(let i = 0;array[i] != undefined;i++){
 
        if(array[i] > melhor){
            melhor = array[i]
            contM++
        }
        if(array[i] < pior){
            pior = array[i]
            contP++
        }
    }
    return [contM,contP]
}

console.log(pontuacoes('10 20 30 40 50 60 70 80 90'))