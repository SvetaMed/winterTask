let z=0

let DigitCountK = (K) => {
    let  p, i, S
    p =  K
    S = p
     i = 0
    while (p>0)
        {
        S = p
        S = S%10
        p = p/10 
        p = Math.trunc(p) 
        i++
        }
       
    return(i)
   }
let mas = []
  
for (let i = 0; i< 5; i++){
    mas[i] =Math.trunc(Math.random()*1000)
    console.log(mas[i], DigitCountK(mas[i]))
    alert('в вашем числе ' + DigitCountK(mas[i]) + ' цифр')  
   }
  
  
   
   