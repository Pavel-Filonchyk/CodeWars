
console.log(eight(plus(three())))      // 11
console.log(two(plus(three())))        // 5
console.log(seven(dividedBy(two())))   // 3

function desn(array){
    if(array.includes('+')){
        return array[0] + array[2]
    }
    if(array.includes('-')){
        return array[0] - array[2]
    }
    if(array.includes('*')){
        return array[0] * array[2]
    }
    if(array.includes('/')){
        return array[0] / array[2]
    }
}
function operator(opr){
    if(opr === '+' || opr === '-' || opr === '*' || opr === '/'){
        return opr
    }else{
        return +opr 
    }
}

function zero(arg) { 
    if(arg){
        const arr = `0${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 0
    }
}
function one(arg) {
    if(arg){
        const arr = `1${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 1
    }
}
function two(arg) {
    if(arg){
        const arr = `2${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 2
    }
}
function three(arg) {
    if(arg){
        const arr = `3${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 3
    }
}
function four(arg) {
    if(arg){
        const arr = `4${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 4
    }
}
function five(arg) {
    if(arg){
        const arr = `5${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 5
    }
}
function six(arg) {
    if(arg){
        const arr = `6${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 6
    }
}
function seven(arg) {
    if(arg){
        const arr = `7${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 7
    }
}
function eight(arg) {
    if(arg){
        const arr = `8${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr))
    }else{
        return 8
    }
}
function nine(arg) {
    if(arg){
        const arr = `9${arg}`.split('').map(item => {
           return operator(item)
        })
        return Math.floor(desn(arr)) 
    }else{
        return 9
    }
}

function plus(arg) {
    return `+${arg}`
}
function minus(arg) {
    return `-${arg}`
}
function times(arg) {
    return `*${arg}`
}
function dividedBy(arg) {
    return `/${arg}`
}