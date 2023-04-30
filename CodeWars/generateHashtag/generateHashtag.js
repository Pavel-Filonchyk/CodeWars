// Generate Hashtag
// "a".repeat(139)                           => false to match long
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    if(str.replace(/\s/g,'') === '' || str.replace(/\s/g,'').length >= 140){
        return false
    }
    const arr = str.split(" ").map(item => item.split("")),
        withoutFirstWord = arr.map(item => item.slice(1)).map(item => item.join("")), 
        deleteFirstWord = arr.map(item => item.splice(0, 1)),
        connection = withoutFirstWord.map((item, index) => {
            return `${deleteFirstWord[index].join("").toUpperCase() + item}`
        }).join('').replace(/\s/g,'')
    return `${'#' + connection}`
}
console.log(generateHashtag("    Hello     World   "))