
let SortInc3 = (a,b,c) => 
{
    if (a<b){
        if (b<c){
            x1 = a
            x2 = b
            x3 = c
            }
        }
    else {
            if (b<a){
                if (a<c){
                x1 = b
                x2 = a
                x3 = c 
                }
            else {
                if (c<a){
                    if (a<b){
                        x1 = c
                        x2 = a
                        x3 = b 
                    }
                    else{
                        x1 = c
                        x2 = b
                        x3 = a
                        }
                 } 
             }
         }  
        }
 return [x1, x2, x3]

}
for (let i = 0; i<2; i++){
    x = prompt('введи одно число')
    y = prompt('введи еще одно число')
    z = prompt('введи еще одно число')
    alert(SortInc3(x,y,z))
}


