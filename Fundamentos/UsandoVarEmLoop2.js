var funcs = []

for(var i=0; i < 10;i++){
    funcs.push(function(){
        console.log(i)
    })
    funcs[0]()
}
console.log(' ')
funcs[2]()
funcs[8]()