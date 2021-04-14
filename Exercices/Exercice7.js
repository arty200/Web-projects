function baskara(a,b,c){
    let delta = (b**2) - (4*a*c)
    if(delta < 0){
        return 'Delta negativo'
    }else{
        let x1 = (Math.sqrt(delta)-b)/(2*a) 
        let x2 = (-Math.sqrt(delta)-b)/(2*a)
        return [x1,x2]
    }
}

console.log(baskara(3,2,1))
console.log(baskara(3,10,1))