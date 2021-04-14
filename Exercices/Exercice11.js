function bissexto(ano){
    if(ano % 400 == 0){
        return `É bissexto`
    }else if(ano % 100 == 0){
        return `Não é bissexto`
    }else if(ano % 4 == 0){
        return `É bissexto`
    }else{
        return `Não é bissexto`
    }
}

console.log(bissexto(27))
console.log(bissexto(800))
console.log(bissexto(1000))
console.log(bissexto(300))
console.log(bissexto(2))
console.log(bissexto(256))