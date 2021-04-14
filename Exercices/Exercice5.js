function debugaGrana(bugado){
    bugado = parseFloat(bugado.toFixed(2))
    stringBugada = bugado.toString()
    stringBugada.replace('.',',')
    return 'R$ ' + stringBugada
}

console.log(debugaGrana(120.502226646848468))
console.log(debugaGrana(0.050000000000031121))