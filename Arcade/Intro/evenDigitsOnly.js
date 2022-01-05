function solution(n) {
    let strN = n + ""
    let arr = strN.split("")
    for(let i = 0; i < arr.length; i++){
        if(parseInt(arr[i]) % 2 === 1){
            return false
        }
    }
    return true
}