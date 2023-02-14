const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = (p) => p.pais === 'China'
const mulheres = (g) => g.genero === 'F'
const menor = (s1, s2) => s1.salario < s2.salario ? s1 : s2

axios.get(url).then(response => {
    const funcionarios = response.data

    const chineFem = funcionarios.filter(chineses)
        .filter(mulheres)
        .reduce(menor)
    console.log(chineFem);
})