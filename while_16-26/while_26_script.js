let  n, a, b


n =  prompt("введи целое число")
a = 1
b = 1
while ((a<=n) && (b<=n))
    {
    if (a<b) {
        a = a + b
    }
    else {
        b = b + a
    }
}
  if (a>b) {
      alert ((a-b) +' та ' + a)
  }
else {
    alert ((b-a) +' та ' + b)
}