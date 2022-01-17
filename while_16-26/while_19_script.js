let  p, i, sum, S, text
text = 'False'
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
   if (S == 2) {
    text = 'True'
    break
   }
     }
     alert(text)  
