function solution(inputArray) {
    let maxAdjacent = 0
    for(let i = 0; i< inputArray.length; i++){
        let absolute = Math.abs(inputArray[i]-inputArray[i+1])
        if(absolute > maxAdjacent){
            maxAdjacent = absolute
        }
    }
    return maxAdjacent
}