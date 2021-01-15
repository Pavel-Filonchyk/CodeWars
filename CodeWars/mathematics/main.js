function area(d,l){
    if(l<d){
    let n = Math.sqrt(Math.pow(d, 2)- Math.pow(l, 2))
    let s = Math.round(l*n*100)/100
    return s
    }
    if(l=>d){return "Not a rectangle"}
 }
 area(10, 8)