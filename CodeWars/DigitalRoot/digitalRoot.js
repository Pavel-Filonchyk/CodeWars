const nums = 6058455796848659
function digitalRoot(num){
    const sumNums = String(num).split("").map(item => Number(item)).reduce((n, m)=> n + m) 
    const string = String(sumNums)
    const length = string.split("").length

    if(length > 1){
        return digitalRoot(string)
    }else{
        return sumNums
    }
}
console.log(digitalRoot(nums))