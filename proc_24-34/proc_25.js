 let z = 0
let IsSquare = (K) => {
 if ( Math.round(K**(1/2))**2 == K ) {
     return true
  
 }
 else{
     return false
 }

}
let mas = []
for (let i = 0; i< 10; i++){
    mas[i] = Math.round(Math.random()*100)
    console.log(mas[i], IsSquare(mas[i]))
    if (IsSquare(mas[i])){
        z++
    }
   }
   alert ('квадратів чисел '+ z)   

