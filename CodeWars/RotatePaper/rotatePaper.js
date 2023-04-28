function rotatePaper(str) {
    const arr = str.split("")
    const filter = arr.filter(item => item === '1' || item === '3' || item === '4' || item === '7')
    if(!str){
        return false
    }
    if(filter[0]?.length > 0){
        return false
    }

    const revers = arr.slice().reverse()
    const viceVersa = revers.map(item => {
        return item === '6' ? '9' : item === '9' ? '6' : item
    }).join("")
    if(filter[0] === undefined && viceVersa  === arr.join("")){
        return true
    }else{
        return false
    }
} 
rotatePaper("266992")   // true
rotatePaper("266982")   // false
rotatePaper("77")       // false