const anonimo = process.argv.indexOf('-a') !== -1 // se tiver a flag -a, retorna true, se n retorna flase
console.log(anonimo)

if(anonimo){ // Caso a flag esteja ativa
    process.stdout.write('Fala anonimo!\n') //Escreve na saida padrao
    process.exit() // encerra o processo
}else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // sdin coleta um dado da entrada padrão(teclado)
        const nome = data.toString().replace('\n','') // Troca o enter digitado por um espaço vazio
        process.stdout.write(`   Fala ${nome} !!\n`) // Escreve no console o nome inserido
        process.exit() // Garante o final do processo ou o interrompe de forma prematura
    })
}