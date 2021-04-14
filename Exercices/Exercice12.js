function fatorial(numero){
    let fatorial = 1
    if(numero == 0){
        return 1
    }
    for(let i = numero; i > 0;i--){
        fatorial = fatorial * i
    }
    return fatorial
}

console.log(fatorial(27))
console.log(fatorial(5))
console.log(fatorial(4))
console.log(fatorial(2))
console.log(fatorial(1))