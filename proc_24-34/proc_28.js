let z=0

let IsPrimeN = (N) => {
    let  p, i, f
    p = N
    f = true
    i = 2
    while (i<p)
        {
            if (p%i==0) {
                f = false
                break
            }
            i++  
         }
return(f)
   }
   let mas = []
  
for (let i = 0; i< 10; i++){
    mas[i] = Math.round(Math.random()*100)
    console.log(mas[i], IsPrimeN(mas[i]))
    if (IsPrimeN(mas[i])) {
        z++
        }
   }
   alert(z + 'простых чисел было из 10 случайных')   
  