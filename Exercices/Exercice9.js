function aprovado(nota){
    if(nota >= 70){
        return `Aprovado com nota : ${nota}`
    }else{
        return `Em recuperação com nota : ${nota}`
    }
}

function arredondaNotas(notaBruta){
    let notaFinal
    if(notaBruta < 38){
        return `Reprovado com nota : ${notaBruta}`
    }else if(notaBruta % 5 == 0){
        return aprovado(notaBruta)
    }else if((notaBruta+1) % 5 == 0){
        notaFinal = notaBruta + 1
        return aprovado(notaFinal)
    }else if((notaBruta+2) % 5 == 0){
        notaFinal = notaBruta + 2
        return aprovado(notaFinal)
    }else if((notaBruta-1) % 5 == 0){
        notaFinal = notaBruta - 1
        return aprovado(notaFinal)
    }else if((notaBruta-2) % 5 == 0){
        notaFinal = notaBruta - 2
        return aprovado(notaFinal)
    }else{
        return 'Algo deu errado'
    }
}

console.log(arredondaNotas(25))
console.log(arredondaNotas(38))
console.log(arredondaNotas(71))
console.log(arredondaNotas(100))
