function solution(inputArray, elemToReplace, substitutionElem) {
    let i = 0;
    while(i<inputArray.length){
        if(inputArray[i]==elemToReplace){
            inputArray[i]=substitutionElem
        }
        i++
    }
    return inputArray
}