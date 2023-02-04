console.log(Math.ceil(6.1))//arredonda para cima

const obj1 ={}
obj1.nome ='Bola'
//obj1['nome'] ='Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Executad..')
    }
 }
 const obj2 = new Obj('Olha só!')
 const obj3 = new Obj('Eita que bom!')

 console.log(obj2.nome)
 console.log(obj3.nome)
 obj3.exec()