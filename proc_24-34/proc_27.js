 let z = 0

let IsPowerN = (K,N) => {
    x = Math.log(K) / Math.log(N)
    if ( Math.round(x) == x )  {
        return true
    }
    else{
        return false
    }
   }
   let mas = []
   let N
   N = prompt('введи число')
for (let i = 0; i< 10; i++){
    mas[i] = Math.round(Math.random()*10)
    console.log(mas[i], IsPowerN(mas[i]))
    if (IsPowerN(mas[i])){
        z++
    }
   }
   alert ('степенів '+ z)   