function quitanda(fruta) {
    switch (fruta) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return"erro"
    }
}
console.log(quitanda("maçã"));
console.log(quitanda("kiwi"));
console.log(quitanda("melancia"));
console.log(quitanda("melaia"));