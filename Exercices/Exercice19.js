function impares(inicio=0,fim=100){
    let impar = []
    if(inicio > fim){
        let temp = inicio
        inicio = fim
        fim = temp
    }
    for(let i=inicio;i<fim;i++){
        if(i % 2 != 0){
            impar.push(i)
        }
    }
    return impar
}

console.log(impares())
console.log(impares(50,100))
console.log(impares(100,50))