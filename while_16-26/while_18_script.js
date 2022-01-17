let  p, i, sum, S
sum = 0
p =  prompt("введи целое число")
S = p
i = 0
while (p>0)
    {
    S = p
    S = S%10
    p = p/10 
    p = Math.trunc(p) 
   // console.log(S)
    i++
    sum = sum + S
     }
    alert('сумма цифр вашего числа = ' + sum)  
     alert('в вашем числе ' + i + ' цифр')

