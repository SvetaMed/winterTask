let  n, a, b


n =  prompt("введи целое число")
a = 1
b = 1
while ((a<n) ||(b<n))
    {
    if (a<b) {
        a = a + b
    }
    else {
        b = b + a
    }
}
   
   
    if ((a == n)||(b == n)) {
    text = 'число Фибоначчи'
    }
   else{
    text = 'Не число Фибоначчи'
   }
   alert(text)  
