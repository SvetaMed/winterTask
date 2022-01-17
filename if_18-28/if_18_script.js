let x1, x2, x3


x1 =  prompt("первое число?")
x2 =  prompt("второе число?")
x3 =  prompt("третье число?")


if ((x1 == x2) && (x1 != x3))
    {
    alert("3")
    }
else {
    if      ((x1 == x3) && (x1 != x2))
    {
        alert("2")
    }
    else {
        alert("1")
    }
}

