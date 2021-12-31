function solution(inputArray) {
    let longestStringArray = []
    
    let len = inputArray.map(str => str.length)
    
    let maxLength = Math.max(...len)
   
    for(let i = 0; i< inputArray.length; i++){
        if(inputArray[i].length === maxLength){
            longestStringArray.push(inputArray[i])
        }
    }
    return longestStringArray
}