function solution(inputArray) {
    let count = 0
    let j = 2
    while(j < Math.max(...inputArray)+1){
        for(let i = 0; i< inputArray.length; i++){
            if(inputArray[i] % j !== 0){
                count++
            }
            if(count == inputArray.length){
                return j
            }
        }
        j++
        count = 0
    }
    return j
}