let  A, B, x, y

x =  prompt("введи целое число")
y =  prompt("введи целое число")
A = x
B = y
while (A>0 && B>0)
  {
      if (A>B)
         {
           A = A % B
        }
      else {
          B = B % A
      } 
     }
if (A==0) {
    alert(B + " НОД чисел " + x + ' и '+ y)
    }
else {
    alert(A + " НОД чисел " + x + ' и '+ y)
}  
