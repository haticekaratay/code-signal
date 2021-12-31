function solution(inputString) {
    let stack = [[]]
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i]==="("){
            stack.push([])
        }else if(inputString[i]===")"){
            let popLastInputFromStack = stack.pop()
            let reversePoppedInputs = popLastInputFromStack.reverse()
            stack[stack.length-1].push(...reversePoppedInputs)
        }else{
            stack[stack.length-1].push(inputString[i])
        }
    }
    return stack[0].join("")
}