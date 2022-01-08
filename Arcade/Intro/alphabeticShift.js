function solution(inputString) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    // let alphabet = alpha.split("")
    let newStringArray = inputString.split("")
    for(let i = 0; i< inputString.length; i++){
        if(inputString[i].toLowerCase() === "z"){
            newStringArray[i] = "a"
        }else{
            let newCharIndex = alpha.indexOf(inputString[i])
            newStringArray[i]= alpha[newCharIndex+1]
            
        }
    }
    return newStringArray.join("")
}