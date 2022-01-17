   
let IsPalindrome =(K) => {

    let s, SS
    s = String(K)
    SS = s.split("").reverse().join("")
 
    if (SS == s ) {
                return  true
                }
    else{
        return false
    }            
}
let z= 0
let mas = []
for (let i = 0; i< 10; i++){
    mas[i] = Math.trunc(Math.random()*1000)
    console.log (mas[i], IsPalindrome(mas[i]))
    if (IsPalindrome(mas[i])) {
        z++
    }
}
alert (z + ' палиндромов из 10 случайных чисел')