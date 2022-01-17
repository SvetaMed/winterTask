let  N, y, i, s
s = 1
y = 1
N =  prompt("введи любое положительное число")

for (i = 0; i < N; i++)
    {
        y = y + 0.1
        s = s * y
        
    }
    alert(s.toFixed(5))        
