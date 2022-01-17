let x1, x2, x3, x4


x1 =  prompt("первое число?")
x2 =  prompt("второе число?")
x3 =  prompt("третье число?")
x4 =  prompt("четвертое число?")


if ((x1 == x2) && (x1 ==x3) &&(x1 != x4))
    {
    alert("4")
    }
else {
    if      ((x1 == x4) && (x1 == x2) &&(x1 != x3))
    {
        alert("3")
    }
    else {
        if      ((x1 == x4) && (x1 == x3) &&(x1 != x2))
        {
            alert("2")
        }
        else {
            alert("1") 
        }
    }
}

