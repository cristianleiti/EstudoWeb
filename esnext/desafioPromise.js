const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho){
    return new Promise(resolve=>{
        fs.readFile(caminho, function exibirConteudo(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linha=> linha.join(', '))
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log)