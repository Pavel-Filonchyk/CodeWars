
function solution(str, ending){
    if (str.slice(-ending.length) == ending) return true;
    if (ending == '') return true;
    else return false
}
solution('abcde', 'abc')