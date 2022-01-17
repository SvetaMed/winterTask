let  p, i, sum, S, SS
sum =''
p =  prompt("введи целое число")
S = p
i = 0
while (p>0)
    {
    S = p
    S = S%10
    p = p/10 
    p = Math.trunc(p) 
    SS = S.toString()
    sum = sum + SS
     }
    alert(sum)  
    

