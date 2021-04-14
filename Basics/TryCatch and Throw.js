//Mecanismo de tratamento de erros
function tratarErroELancar(erro){
    throw new Error('FUDEU') // Cria uma mensagem personalizada de erro, um numero, objeto ou o que quiser
}

function imprimirNomeGritado(obj) {
    try{ // isola codigo que pode gerar erro
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){//Faz o tratamento, ou resposta do erro gerado se for gerado erro
        tratarErroELancar(e)
    }finally { // Bloco de codigo que sempre sera executado, ocorrendo erro ou n
        console.log('final')
    }

}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)