let  N, i, fakt, S, X


N =  prompt("введи число - значение степени")
X =  prompt("введи дробное число")
S = 0
fakt = 1
for (i = 1; i <= N; i++)
    {
       fakt = fakt*i
       S = S + (X**i)/fakt
    //   console.log(i)
    //   console.log(fakt)
    //   console.log(S)
     }
  alert ( S)   
