// A task: A task. You need to get all the key values and put them into an array

function volum (arr){
    let allNum = []
    for (let key in arr){       
        for(let i in arr[key]){
            allNum.push(arr[key][i])  
        }
    }
    return allNum
}
volum ([{f:1}, {f:2}, {g:2}])