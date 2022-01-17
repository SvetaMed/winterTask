   
let RadToDeg =(N) => {
    let r
    r = (180 * N) / Math.PI
     return(r)   
    }
let mas = []
for (let i = 0; i< 5; i++){
    mas[i] = prompt('введите значение радианной меры угла')
   alert('в градусах это составит' + RadToDeg(mas[i]))
    
}
