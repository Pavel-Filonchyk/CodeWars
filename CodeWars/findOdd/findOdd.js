// Find the odd int
// best practics:
// function findOdd(A) { return A.filter(x => A.filter(i => i == x).length % 2)[0] }
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b)
// and my decision ;)

const nums = [0, 1, 0, 1, 0]  

function findOdd(numbers){
    if(numbers.length === 1){
        return Number(numbers[0])
    }
    const unique = numbers.filter(a => numbers.filter(b => b === a).length === 1)
    if(unique.length === 1){
        return Number(unique[0])
    }
    if(unique.length > 1){
        const odd = unique.filter((n, inx) => {
            return  n % 2
        })
        return Number(odd[0])
    }

    const duplicates = numbers.filter((e, index, arr) => arr.indexOf(e) !== index)
    const uniq = Array.from(new Set(duplicates))                                    
  
    let arr = []
    uniq.forEach((item) => {
        const filter = numbers.filter(elem => elem === item)
        if(filter[0] === 0){
            const sumZero = filter.map(item => item = 1).reduce((n, m) => Number(n) + Number(m))
            arr.push({'0': sumZero})
        }else{
            const sum = filter.reduce((n, m) => Number(n) + Number(m))
            arr.push({[item]: sum})
        }
    })
 
    const keys = arr.map(item => Object.keys(item)[0])
    const odd = arr.filter((n, inx) => {
            return  n[keys[inx]] % 2
        }
    )
    return Number(Object.keys(odd[0])[0])
}
console.log(findOdd(nums))