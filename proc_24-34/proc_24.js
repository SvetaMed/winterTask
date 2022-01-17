let Even = (K) => {
 if (K%2 == 0) {
     return true
 }
 else{
     return false
 }
}


let mas = []
for (let i = 0; i< 10; i++){
    mas[i] = Math.round(Math.random()*20)
    console.log(mas[i], Even(mas[i]))
}

 