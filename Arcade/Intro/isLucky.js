function solution(n) {
    let nString = n + ""
    // let nArray = nString.split("")
    let sum = 0;
    let i = 0;
    let j = nString.length-1;
    while(i<j){
        sum += parseInt(nString[i])
        sum -= parseInt(nString[j])
        // console.log(sum)
        i++
        j--
    }
    return sum === 0
}