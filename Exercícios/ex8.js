const pontoJogo = [10,20,20,8,25,3,0,30,1]
let anterior = 0
var recorde = 0
let pior = 50
for (let i = 0; i < pontoJogo.length; i++) {
    if(i !=0 && anterior < pontoJogo[i]){
        recorde++
        pior = i
    }
    anterior = pontoJogo[i]
}
console.log(recorde, pior)