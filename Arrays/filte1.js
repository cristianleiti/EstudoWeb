const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4100, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caroFragil = produtos.filter((p)=>p.preco>500&&p.fragil)
console.log(caroFragil);

console.log(produtos.filter(function (p) {
    return false
}))

const caro = (p) => p.preco > 500
const fragil = (p) => !!p.fragil
console.log(produtos.filter(caro).filter(fragil));


