function twistedSum(n) {
    let copie = []
    Array(n).fill(0).forEach((item, index) =>{
        copie.push(n - index)
    })
    if(n <= 9){
        return copie.reduce((n, m) => n + m)
    }
    if(n > 9){
        const ost = copie.reverse().splice(9)
        const summ = ost.join("").split("").map(item => Number(item)).reduce((n, m)=> n + m)
        const summToTen = 45
        const allArrs = [summToTen + summ]
        return allArrs[0]
    }   
}
console.log(twistedSum(11)) 