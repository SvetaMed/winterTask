   
let DegToRad =(N) => {
    let r
    r = (N * Math.PI) /180
     return(r)   
    }
let mas = []
for (let i = 0; i< 5; i++){
    mas[i] = prompt('введите значение градусов угла')
   alert('в радианах это составит' + DegToRad(mas[i]))
    
}
