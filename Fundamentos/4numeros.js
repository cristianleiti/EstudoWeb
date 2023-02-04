const peso1 = 1.0
const peso2 = Number("2.0")//Sem o number ele concatena na soma

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871
console.log("")

const total = avaliacao1 * peso1 + avaliacao2 * peso2
console.log(avaliacao1 +" x "+ peso1 +" + "+ avaliacao2 +" x "+ peso2+" = "+total)
console.log("")

const media = total / (peso1 + peso2)
console.log(peso1 +" + "+ peso2+" / "+total +" = "+ media)
console.log("")

console.log(total)
console.log(media)
console.log(media.toFixed(2)) 
console.log(media.toString(2))
console.log(media.toString(10)) //em decimal, mas pode ser binário, hexadecimal...
console.log(typeof media)
console.log(typeof Number)//Number com 'N' maiúsculo é uma função diferente do number com minúsculo
