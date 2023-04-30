// Create Phone Number  
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])   // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
    const firstThreeNumbers = numbers.splice(0, 3).join(""),   
        secondThreeNumbers = numbers.splice(0, 3).join(""),
        anyNumbers = numbers.splice(0, 4).join(""),
        numberPhone = `(${firstThreeNumbers}) ${secondThreeNumbers}-${anyNumbers}`
    return numberPhone
}

// Who likes it? 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

const names = ["Jacob", "Alex"]  
function likes(ars) {
   if(ars.length === 0){
        return "no one likes this"
   }
   if(ars.length === 1){
        return `${ars[0]} likes this`
   }
   if(ars.length === 2){
        return `${ars[0]} and ${ars[1]} like this`
   }
   if(ars.length === 3){
        return `${ars[0]}, ${ars[1]} and ${ars[2]} like this`
   }
   if(ars.length > 3){
        return `${ars[0]}, ${ars[1]} and ${ars.length -2} others like this`
   }
}
console.log(likes(names))

// Bit Counting
// Создать функцию, которая принимает двоичную систему чисел и возвращает сумму единиц десятичной системы
const countBits = function(n) {
    const sum = (n).toString(2).split("").map(item => Number(item)).reduce((n, m)=> n + m)  
    return sum
}
console.log(countBits(100))
