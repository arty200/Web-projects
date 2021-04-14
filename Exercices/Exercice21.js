function notasToConceitos(notas){
    let conceitos = []
    
    for(let i=0;notas[i] != undefined ;i++){
        if(notas[i] > 10 || notas[i] < 0 ){
            conceitos.push('Invalido')
            continue
        }
        if(notas[i] <= 4.9){
            conceitos.push('D')
        }else if(5 <= notas[i] <= 6.9){
            conceitos.push('C')
        }else if(7 <= notas[i] <= 8.9){
            conceitos.push('B')
        }else if(9 <= notas[i] <= 10){
            conceitos.push('A')
        }
    }
    for(let i=0;conceitos[i] != undefined;i++){
        console.log(`A nota ${notas[i]} possui o conceito ${conceitos[i]}`)
    }
}

notasToConceitos([5.2,2,10,5.6,52,7.7,5.3,5.8526])