let  x, y


x =  prompt("первая координата точки?")
y =  prompt("вторая координата точки?")




if ((x >0 ) && (y >0))
    { 
    alert("1")
    }
else {
    if((x > 0) &&(y < 0))
    { 
    alert("4")
    }
    else {
            if ((x<0)&&(y>0))
            { 
            alert("2")
            }
            else {
                alert ("3")
                }
         }
    }         
