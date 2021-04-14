function revenda(modelo){
    switch(modelo){
        case 'hatch':
            return `Compra efetuada com sucesso`
        case 'sedan':
        case 'motocicleta':
        case 'caminhodete':
            return `Tem certeza que não prefere o modelo sedan ?`
        default:
            return `Não possuimos este modelo lamento`    
    }
}

console.log(revenda('merda'))
console.log(revenda('sedan'))
console.log(revenda('hatch'))
console.log(revenda('motocicleta'))