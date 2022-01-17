let  x, y


x =  prompt("введи любое число")




if (x < 0)
    { 
     y= 0
    }
else {
    if ((Math.trunc(x)%2 == 0 ))
    { 
     y= 1
    }
    else {
            y = -1
        }
    }
alert ("відповідь на 27 задачу: " + y)               
