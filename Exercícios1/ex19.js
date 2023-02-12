function lanchonete(pedido,qtd){
    switch (pedido) {
        case 100:
            return 'R$'+(3.00 * qtd).toFixed(2)
        case 200:
            return 'R$'+(4.00 * qtd).toFixed(2)
        case 300:
            return 'R$'+(5.50 * qtd).toFixed(2)
        case 400:
            return 'R$'+(7.50 * qtd).toFixed(2)
        case 500:
            return 'R$'+(3.50 * qtd).toFixed(2)
        case 600:
            return 'R$'+(2.80 * qtd).toFixed(2)
           
        default:
            return 'Pedido inválido!';
    }
}
console.log(lanchonete(200, 10));