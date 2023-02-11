function carroTipo(tipo) {
    switch (tipo) {
        case "hatch":
            return "Compra efetuada com sucesso!"
        case "motocicleta": case "caminhonete": case "sedan":
            return "Tem certeza que prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui!"
    }
}
console.log(carroTipo("hatch"));
console.log(carroTipo("caminhonete"));
console.log(carroTipo("motocicleta"));
console.log(carroTipo("sedan"));
console.log(carroTipo("buggie"));