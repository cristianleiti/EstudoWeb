const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (const i in notas) {
    if (Object.hasOwnProperty.call(notas, i)) {
        const element = notas[i];
        console.log(i, element)
    }
}

const pessoa ={
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

console.log("")

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}