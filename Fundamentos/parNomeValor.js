// par
const saudacao ='Opa' //contexto léxico 1 : Em que local foi definido

function exec(){
    const saudacao ='Fala Ae!'//contexto léxico 2
    return saudacao
}
//Objetos são grupos aninhados
const cliente ={
    nome: 'Petzhnskon',
    idade: '∞',
    peso: -0 +1,
    endereco:{
        legradouro: 'St. Jacinto',
        numero:2 ,
        Complemento: 'que esta quase chegando'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
