//String incrementer

// 'fo99obar99' // 'fo99obar100'
// 'foo'        // 'foo1'
// 'foobar23'   // 'foobar24'
// 'foobar999'  // 'foobar1000'

function incrementString (str) {
    const arr = str.split("")
    const find = arr.reverse().find(item => isNaN(item) === true)
    const index = arr.reverse().indexOf(find)
    const numbers = arr.slice(index +1)

    let num
    if(numbers[0] > 0){
        num = (+numbers.join('') +1).toString().split('')
        console.log(num)
        if(numbers.length === 1 ){
            arr.splice(arr.length -1 - num.length +1)
        }else{
            arr.splice(arr.length - num.length +1)
        }
        return [...arr, ...num].join('')
    }
    if(numbers[0] == 0){
        numbers.splice(0, 0, '1')
        num = (+numbers.join('') +1).toString().split('').splice(1)
        arr.splice(arr.length - num.length)
        return [...arr, ...num].join('')
    }else{
        const arrs = str.split("")
        const newStr = [...arrs, '1'].join('')
        return newStr
    }
}
console.log(incrementString("fo99obar99"))