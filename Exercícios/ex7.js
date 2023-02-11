function bhaskara(ax2, bx, c) {
    const delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return console.log("Delta é negativo");
    }
    const raizDelta = Math.sqrt(delta)
    const x1 = (bx + raizDelta) / (2 * ax2)
    const x2 = (bx - raizDelta) / (2 * ax2)
    const bask = [x1, x2]
    return console.log(bask);

}
bhaskara(2, -5, -7)
bhaskara(2, 5, 7)
bhaskara(1, 3, 2)
bhaskara(3, 1, 2)