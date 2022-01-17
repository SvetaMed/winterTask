let A, B, C, x


A =  prompt("первое число?")
B =  prompt("второе число?")
C =  prompt("третье число?")



if ((A < B) && (B < C))
    { x = B - A
    alert("до А ближе В, расстояние = "+ x)
    }
else {
    x = C - A
    alert("до А ближе C, расстояние = "+ x)  
}

