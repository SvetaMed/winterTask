// let Proc6 = (K) => {
//     let C = 0, S = 0, i = 0
   
//     while (K> 0){
//         i = K % 10
//         C++ 
//         S = S + i
//         K = Math.trunc(K/10)
//     }
//     return [C, S]
// }

// for (let j=0; j<5; j++) {
//     K=prompt("введи целое число большее 0")
//     let res = Proc6(K)
//     let C = res[0]
//     let S = res[1]
//     alert('в этом числе' +C + 'цифр, а сумма его цифр' + S)
// }
// let KK=''
// function Proc7(K) {
//     while (K> 0){
//         i = K % 10
//         KK = KK+i
//         K = Math.trunc(K/10)
//     }
//     return [KK]
// }
// for (let j=0; j<5; j++) {
//     K = prompt("введи целое число большее 0")
//     let res = Proc7(K)
//     alert('число в обратном порядке '+ res)
//     KK = ''
// }

// let Proc8 = (K) => {
//         let D1 = 0, D2 = 0, i = 0, K1, K2
//        D1 = prompt('введи одну цифру')
//        D2 = prompt('введи еще одну цифру')
//         K1 = Number(K+ D1)           
//         K2 =  Number(K1+ D2)
//         return [K1, K2]
//     }
// K = prompt("введи целое число большее 0")
// let res = Proc8(K)
// alert (res)   

let Proc9 = (K) => {
    let D1 = 0, D2 = 0, i = 0, K1, K2
   D1 = prompt('введи одну цифру')
   D2 = prompt('введи еще одну цифру')
    K1 = Number(D1 + K)           
    K2 =  Number(D2 + K1)
    return [K1, K2]
}
K = prompt("введи целое число большее 0")
let res = Proc9(K)
alert (res)   