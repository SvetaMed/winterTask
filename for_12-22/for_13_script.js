let  N, y, i, s
s = 1.1
y = 1.1
N =  prompt("введи любое положительное число")

for (i = 1; i < N; i++)
    {
        y = y + 0.1
        s = s +((-1)**i)* y
        console.log(y)
    }
    alert(s)     
