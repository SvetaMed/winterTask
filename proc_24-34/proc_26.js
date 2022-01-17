 let z = 0

let IsPower5 = (K) => {
    x = Math.log(K) / Math.log(5)
    if ( Math.round(x) == x ) {
        return true
    }
    else{
        return false
    }
   }
   let mas = []
for (let i = 0; i< 10; i++){
    mas[i] = Math.round(Math.random()*100)
    console.log(mas[i], IsPower5(mas[i]))
    if (IsPower5(mas[i])){
        z++
    }
   }
   alert ('степенів п`яти  '+ z)   