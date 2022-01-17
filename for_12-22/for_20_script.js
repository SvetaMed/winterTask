let  N, i, fakt, S


N =  prompt("введи число - значение степени")
S = 0
fakt = 1
for (i = 1; i <= N; i++)
    {
       fakt = fakt*i
       S = S+fakt
    //   console.log(i)
    //   console.log(fakt)
    //   console.log(S)
     }
  alert ("сумма факториалов до числа "+ N + "=" + S)   
