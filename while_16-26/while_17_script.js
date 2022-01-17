let  p, i, k, S

p =  prompt("введи целое число")
S = p
while (p>0)
    {
    S = p
    S = S%10
    p = p/10 
    p = Math.trunc(p) 
    console.log(S)
     }

