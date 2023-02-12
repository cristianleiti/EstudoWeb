
function JurosSimples(capitalInicial,taxaJuros,tempoAplicacao){
    return console.log((capitalInicial * taxaJuros / 100 * tempoAplicacao)); 
}
function JurosCompostos(capitalInicial,taxaJuros,tempoAplicacao){
    return console.log((capitalInicial *(1+ taxaJuros/100)**tempoAplicacao)); 
}
JurosSimples(1200, 2, 14)
JurosCompostos(620, 1.5,24)