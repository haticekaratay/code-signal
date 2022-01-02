function solution(inputString) {
    let charCount = new Map()
    for(let i = 0; i < inputString.length; i++){
        if(charCount.has(inputString[i])){
            charCount.set(inputString[i], charCount.get(inputString[i])+1)
        }else{
            charCount.set(inputString[i], 1)
        }
    }
    let oddNumberCount = 0
    for(let value of charCount.values()){
        if(value%2 == 1){
            oddNumberCount++
        }
    }
    return oddNumberCount <=1 
}