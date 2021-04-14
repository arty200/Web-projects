//n = numero de termos
//a1 = primeiro termo
//r = razão
function PA(n,a1,r){
    let termos = []
    for(let i=1;i<=n;i++){
        termos.push(a1 + (i - 1)*r)
    }
    return termos
}

function PG(n,a1,r){
    let termos = []
    for(let i=0;i<=n;i++){
        termos.push(a1*(r**(i-1)))
    }
    return termos
}


console.log(PA(5,2,9))
s
console.log(PG(10,5,5))