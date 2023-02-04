function triagulos(a, b, c) {
    if (a == b == c) {
        return console.log('Equilátero');
    }
    else if (a != b && b != c && c != a) {// se todos lados do triagulo forem diferentes
        return console.log('Escaleno');
    }
    else {
        return console.log('Isósceles');
    }
}

triagulos(1, 1, 1)
triagulos(2, 1, 1)
triagulos(1, 1, 3)
triagulos(1, 3, 1)
triagulos(3, 1, 2)