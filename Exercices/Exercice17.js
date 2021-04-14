function multiplicaVet(vet,multiplicador){
    for(let i = 0;vet[i]!=undefined;i++){
        vet[i] = vet[i] * multiplicador
    }
    return vet
}

function multiplicaMaiorQue5(vet,multiplicador){
    for(let i = 0;vet[i]!= undefined;i++){
        if(vet[i] > 5){
            vet[i] = vet[i] * multiplicador
        }
    }
    return vet
}

console.log(multiplicaVet([1,2,3,4,5,6,7,8,9,10],2))
console.log(multiplicaVet([1,2,3,4,5,6,7,8,9,10],253))
console.log(multiplicaMaiorQue5([1,2,3,4,5,6,7,8,9,10],2))