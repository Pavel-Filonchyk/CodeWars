// Array.diff
// удалить из первого массива все повторяющиеся элементы второго массива

function arrayDiff(a, b) {
    if(a.length === 0){
        return []
    }
    let result = []
    for(let i = 0; i < a.length; i++) {
            if (b.indexOf(a[i]) == -1) {
            result.push(a[i])
        }
    }
    return result
}
console.log(arrayDiff([1,2], [1]))         // [2]
console.log(arrayDiff([1,2,2,2,3], [2]))   // [1, 3]
console.log(arrayDiff([1,2,3], [1,2]))     // [3]