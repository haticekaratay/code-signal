function solution(inputArray) {
    
    let currentMaxProduct = inputArray[0] * inputArray[1]
    for(let i = 1; i< inputArray.length; i++){
        let currentProduct = inputArray[i] * inputArray[i+1]
        if(currentProduct > currentMaxProduct){
            currentMaxProduct = currentProduct
           
        }
    }
    return currentMaxProduct
}
