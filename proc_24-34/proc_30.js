   
let DigitN =(N,K) => {
    let S, j = 0
    p = K
    while (p>0)
        {
        S = p
        S = S%10
        p = p/10 
        p = Math.trunc(p)
        j++
        if (N == j)
        {
            return(S)
        } 
     }      
}

let mas = []
let N = 1
for (let i = 0; i< 5; i++){
    mas[i] = Math.trunc(Math.random()*10000)
    N = prompt('введите число от 1 до 5')
    console.log (N, mas[i], DigitN(N, mas[i]) )
    
}
