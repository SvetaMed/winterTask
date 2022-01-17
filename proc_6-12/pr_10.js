
let Swap = (a, b) => {
   
   z = a
   a = b
   b = z
   return [a, b]
}
let x, y
 for (let i = 0; i<2; i++){
    x = prompt('введи одно число')
    y = prompt('введи еще одно число')
   alert(Swap(x,y))
 }

let Minmax = (a,b) => {

    a = Math.min(a,b)
    b = Math.max(a,b)
    return [a, b]

}
for (let i = 0; i<4; i++){
    x = prompt('введи одно число')
    y = prompt('введи еще одно число')
    alert(Minmax(x,y))
}


