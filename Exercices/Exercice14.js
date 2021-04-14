function fruta(fruta){
    switch(fruta){
        case 'maca':
            return 'Nao vendemos esta fruta aqui'
        case 'kiwi':
            return 'Estamos em escassez de kiwi'
        case 'melancia':
            return '3 reais o quilo'
        default:
            return 'No Hablo su idioma manito'    
    }
}

console.log(fruta('merda'))
console.log(fruta('maca'))
console.log(fruta('kiwi'))
console.log(fruta('melancia'))
