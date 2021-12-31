//Given the string, check if it is a palindrome.
function solution(inputString) {
    let i = 0
    let j = inputString.length -1 
    while(i<j){
        if(inputString[i] !== inputString[j]){
            return false
        }else{
            i++
            j--
        }
    }
    return true
}