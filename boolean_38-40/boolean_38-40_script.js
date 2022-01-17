let x1 = 1
let y1 = 1
let x2 = 1
let y2 = 1

x1 =  prompt("первая координата по х?")
y1 =  prompt("первая координата по у?")
x2 =  prompt("вторая координата по х?")
y1 =  prompt("вторая координата по у?")

if (Math.abs(x1-x2) == Math.abs(y1-y2))
    alert('слон сможет')
else alert ('слон не сможет')

if ((Math.abs(x1-x2) == Math.abs(y1-y2) || (x1==x2) || (y1==y2)))
    alert('ферзь сможет')
else alert ('ферзь не сможет')

if ((Math.abs(x1-x2) == 1) && (Math.abs(y1-y2) == 2) ||((Math.abs(x1-x2) == 2) && (Math.abs(y1-y2) == 1)))
    alert('конь сможет')
else alert ('конь не сможет')
