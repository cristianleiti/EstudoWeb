function Carro(velocidadeMax = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }
    //metodo publico
    this.getVelociadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log('uno ', uno.getVelociadeAtual(), 'Km/h');

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log('ferrari ', ferrari.getVelociadeAtual(), 'Km/h');
//Tipo:
console.log();
console.log(typeof Carro)
console.log(typeof ferrari)