function calculadora(a,op,b) {
    switch (op) {
        case '+':
            return a+b
        case '-':
            return a-b
        case '/':
            return a/b
        case '*':
            return a*b
        default:
            return "operador inválido!";
    }    
}
console.log(calculadora(1,'+', 7));
console.log(calculadora(1,'/', 7));
console.log(calculadora(1,'*', 7));
console.log(calculadora(1,'+k', 7));