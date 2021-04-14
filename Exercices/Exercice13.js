function diaUtil(dia){
    if(dia > 31 || dia <= 0){
        return `O dia ${dia} é invalido`
    }
    switch(dia){
        case 1:
        case 8:
        case 15:
        case 22:
        case 29:
        case 7:
        case 14:
        case 21:
        case 28:
            return `Dia ${dia} é inutil`
        default:
            return  `Dia ${dia} é útil`
    }
}

console.log(diaUtil(27))
console.log(diaUtil(28))
console.log(diaUtil(-10))