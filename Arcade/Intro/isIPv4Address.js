function solution(inputString) {
    let input = inputString.split(".")
    console.log(input)
    if(input.length !== 4) return false
    for(let i = 0; i< input.length; i++){
        if(parseInt(input[i])>255){
            return false
        }else if(input[i].length == 2 && parseInt(input[i])<10){
            return false
        }else if(input[i].length == 3 && parseInt(input[i])<100){
            return false
        }else if(input[i].length == 0){
            return false
        }else if(parseInt(input[i]) != input[i]){
            return false
        }
    }
    return true
}
