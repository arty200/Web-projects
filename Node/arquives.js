//Leitura de arquivos
const fs = require('fs') // Faz requisição para o sistema de arquivos
const caminho = __dirname + '/arquivo.json' //Define onde o arquivo a ser lido esta
//__dirname é o diretorio atual

// sincrono nao muito interessante para operações com tempo de resposta consideravel
const conteudo = fs.readFileSync(caminho,'utf-8')//Leitura de forma sincrona,parametros o caminho e o encode(grupo de caracteres utilizado para escrever)
console.log(conteudo)

// assincrono nao trava o processamento, ideal para ler arquivos grandes
fs.readFile(caminho,'utf-8', (err,conteudo)=>{ //Se o aquivo não tiver no formato certo ele gera um erro
    const config = JSON.parse(conteudo) // Conteudo vem como string, para acessar os campos precisa transformar em objeto
    console.log(config)
}) // O terceiro parametro é uma função que caso a operação tenha tido sucesso, retorna as informações lidas do arquivo e se deu errado retorna no err um valor de erro

const config = require('./arquivo.json') // Como é um jsonprecisa passar o caminho completo, pois se n ele vai procurar algum arquivo terminaco com .js
console.log(config.db) //Acessa direto o objeto instanciado, retornado pelo require

//Leitura de uma pasta
fs.readdir(__dirname,(err,arquivos) => { // O parametro arquivos da CallBack retorna todos os arquivos presentes na pasta(referenciada pelo primeiro parametro)
    console.log('Conteudo da pasta ')  // O parametro err retorna um erro, caso ele ocorra
    console.log(arquivos)
})

//Escrita de arquivos
const produto = {
    nome:'Celular',
    preco: 12499.99,
    desconto: 0.215
}

//o writeFile pede como parametro o caminho do arquivo escolhido, o objeto a ser salvo( convertido em string) e a funcao que retorna o erro, se ele existe
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo !') //Imprime se teve ou nao erro, se erro for nulo imprime a string
})
//JSON.stringify(objeto) converte o objeto passado como parametro para JSON