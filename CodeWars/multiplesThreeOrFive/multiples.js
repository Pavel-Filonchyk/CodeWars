function solution(number){
    if(Math.sign(number) === -1 || number === 0){
        return 0
    }
    let arr = []
    Array(number).fill(0).forEach((item, index) => {
        arr.push(index)
    })
    let newArr = []
    arr.forEach((item) => {
        if(Number.isInteger(item/3) || Number.isInteger(item/5)){
            newArr.push(item)
        }
    })
    return newArr.reduce((n, m)=> n + m) 
}
console.log(solution(10))