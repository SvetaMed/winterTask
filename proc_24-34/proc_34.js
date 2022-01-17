   
let Fakt =(N) => {
    let   i, fakt
    fakt = 1
    for (i = 1; i <= N; i++)
        {
           fakt = fakt*i
                 
        }
     return(fakt)   
    }
let mas = []
for (let i = 0; i< 5; i++){
    mas[i] = Math.trunc(Math.random()*10)
   alert('факториал числа ' + mas[i] +  ' равен ' + Fakt(mas[i]))
    
}
