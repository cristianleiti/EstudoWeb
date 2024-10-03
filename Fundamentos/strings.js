const escola = "Cod3r"

console.log(escola.charAt(4)) // r
console.log(escola.charAt(5)) // _ erro pois n existe
console.log(escola.charCodeAt(3))// tabela ask = 51
console.log(escola.indexOf('3')) // 3

console.log(escola.substring(1)) // od3r
console.log(escola.substring(0, 3)) // Cod

console.log('Escola '.concat(escola).concat("!")) // concatenação = Escola Cod3r!
console.log('Escola '+ escola + "!") // Escola Cod3r!
console.log(escola.replace(3, 'e')) // Coder
console.log(escola.replace(/\w/g, 'e'))// <- regex = eeee

console.log('Ana,Maria,Pedro'.split(',')) // [ 'Ana', 'Maria', 'Pedro' ]