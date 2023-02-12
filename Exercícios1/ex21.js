function convenio(idade) {
    if (idade >= 1 && idade <= 10) {return 'crianças com ' + idade + ' anos de idade pagam R$ 180'}
    else if (idade >= 11 && idade <= 30) {return 'pessoas com ' + idade + ' anos de idade pagam R$ 150'}
    else if (idade >= 31 && idade <= 60) {return 'pessoas com ' + idade + ' anos de idade pagam R$ 195'}
    else if (idade > 60) {return 'idosos com ' + idade + ' anos de idade pagam R$ 230'}
    else {return 'idade inválida!' }
}
console.log(convenio(30));
console.log(convenio(35));
console.log(convenio(3));
console.log(convenio(80));
console.log(convenio(-80));