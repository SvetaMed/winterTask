let  p, i, text
text = 'число простое'
p =  prompt("введи целое число")
i = 2
while (i<p)
    {
        if (p%i==0) {
            text = 'непростое число'
            break
        }
        i++  
     }
alert(text)  
