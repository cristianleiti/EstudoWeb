const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua AD',
        numero: 1000
    }  
}
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const{sobrenome, menor = true} = pessoa
console.log(sobrenome, menor)

const { endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const{ conta:{ag, num}} = pessoa
console.log(ag, num)