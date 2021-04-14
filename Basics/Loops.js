//Loops com var
for(var i=0;i<10;i++){
    //console.log(i)
}
//console.log('i=',i)

const funcs = []

for(var i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Loops com let
for(let j=0;j<10;j++){
    //console.log(j)
}
//console.log('i=',j) // j n existe aqui

const funcs1 = []

for(let i=0;i<10;i++){
    funcs1.push(function(){
        console.log(i)
    })
}

funcs1[2]()
funcs1[8]()