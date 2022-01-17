let  N, a, i, y


N =  prompt("введи любое положительное число")
a =  prompt("введи любое, даже дробное, число")
y = 1
for (i = 1; i <= N; i++)
    {
        y = y*a
       // console.log (y) 
        
    }
alert(a + ' в степени ' + N +' = ' + y)   
