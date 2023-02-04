let cont = 1
for (var i = 0; i < 20; i++){
    console.log(i, cont)
    i=i/2
    i=+1
    cont=++cont
    if(cont == 20)
    i=20;

}
console.log('i =', i)