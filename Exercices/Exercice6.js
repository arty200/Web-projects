//Juros simples 
function jurSimples(capInicial,txJuros,tAplicacao){
    return (capInicial*txJuros*tAplicacao)
}

//Juros compostos
function jurComposto(capInicial,txJuros,tAplicacao){
    return capInicial * ((1+txJuros)**tAplicacao)
}

console.log(jurSimples(100,0.5,120))
console.log(jurComposto(100,0.2,120))