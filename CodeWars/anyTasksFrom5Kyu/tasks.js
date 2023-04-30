// Flatten
// расгладить массив не используя flat(Infinity)
console.log(flatten(1, [2, 3], 4, 5, ['a', [null, [8]]]))   // [1, 2, 3, 4, 5, 'a', null, 8]

function flatten() {
    let args = []
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i])
    }
     return args.join(',').split(',').map(function(item) {
        if(item === ''){
            return null
        }
        if(isNaN(item) === false){
            return Number(item)
        }else{
            return item
        }
    })       
}

// Simple Pig Latin
// переместить первую букву каждого слова в конец и добавить ay
console.log(pigIt('Pig latin is cool !'))     // 'igPay atinlay siay oolcay'

function pigIt(str){ 
    const arr = str.split(" ").map(item => item.split("")),
        withoutFirstWord = arr.map(item => item.slice(1)).map(item => item.join("")), 
        deleteFirstWord = arr.map(item => item.splice(0, 1)),
        connection = withoutFirstWord.map((item, index) => {
            const sign = deleteFirstWord[index].join("")
            if(sign === '!' || sign === '?' || sign === ',' || sign === '.'){
                return `${item + deleteFirstWord[index]}` 
            }else{
                return  `${item + deleteFirstWord[index] + 'ay'}` 
            }
        }).join(" ")
    return connection
}

// Moving Zeros To The End
// переместить все 0 в конец массива не меняя порядок массива
const nums = [1,2,0,[4, 8, [6]], 1,0,1,0,3,0,1] // [1, 2, 4, 8, 6, 1, 1, 3, 1, 0, 0, 0, 0]

function moveZeros(arr) {
    const filter = arr.flat(Infinity).filter(item => item === 0),
        deleteZero = arr.filter(item => item !== 0),
        spred = [...deleteZero, ...filter]
    return spred
}
console.log(moveZeros(nums))

// First non-repeating character
// найти первую уникальную букву, сохранив ее регистр на выходе
// 'moonmen' - 'e'
// 'sTreSS'  - 'T'

function firstNonRepeatingLetter(str) {
    const array = str.split("")
    const arr = str.toLowerCase().split("")
    const uniq = arr.filter(a => arr.filter(b => b === a).length === 1)[0]
    const index = arr.indexOf(uniq)
    
    if(uniq === undefined){
        return ''
    }
    if(array[index] === uniq){
        return uniq
    }else{
        return uniq.toUpperCase()
    }
}
console.log(firstNonRepeatingLetter('sTreSS'))

// Extract the domain name from a URL
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    const arr = url.split("")
    const sliceHttp = arr.slice(0, 7).join("")
    const sliceHttps = arr.slice(0, 8).join("")
    if(sliceHttp === 'http://'){
        arr.splice(0, 7)
    }
    if(sliceHttps === 'https://'){
        arr.splice(0, 8)
    }
    const sliceWww = arr.slice(0, 4).join("")
    if(sliceWww === 'www.'){
        arr.splice(0, 4)
    }
    const index = arr.indexOf('.')
    const domain = arr.splice(0, [index]).join('')
    return domain
}
console.log(domainName("http://www.zombie-bites.com"))


