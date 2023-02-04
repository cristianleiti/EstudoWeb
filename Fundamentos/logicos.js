function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
  //  const comprarTv32 = !!(trabalho1 ^ trabalho2)// bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
comprinha1 = compras(true,true)
comprinha2 = compras(true,false)//igual
comprinha3 = compras(false,true)//igual
comprinha4 = compras(false,false)



function qualPolegadas(tv1, tv2){
    if(tv1){
        return 'Sim de 50" polegadas!'
    }
    if(tv2){
        return 'Sim de 32" polegadas!'
    }
    return 'Infelizmente não.'

}

function retornoPtBr(booleano){
    if(booleano){
        return'Sim!'
    }else{return'Não.'}
}

function temp(compras){
    
    const template1 =`
    teste:
        Vamos comprar sorvete? ${retornoPtBr(compras.comprarSorvete)}
        Vamos comprar TV? ${qualPolegadas(compras.comprarTv50, compras.comprarTv32)}
        Vamos estar saudáveis? ${retornoPtBr(compras.manterSaudavel)}
    `
    return template1
}

console.log(temp(comprinha1))
console.log(temp(comprinha2))
console.log(temp(comprinha3))
console.log(temp(comprinha4))
