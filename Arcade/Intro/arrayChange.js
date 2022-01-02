function solution(inputArray) {
    let addedValue = 0

    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i-1]>=inputArray[i]){
            
            addedValue += inputArray[i-1]-inputArray[i]+1
            inputArray[i]=inputArray[i-1]+1
        }
    }
    return addedValue
}