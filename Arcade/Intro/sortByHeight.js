function solution(a) {
    let uniqueArray = []
    for(let i = 0; i< a.length; i++){
        if(a[i] != -1){
            uniqueArray.push(a[i])
        }
    }
    uniqueArray.sort((a,b)=> a-b)
    // console.log(uniqueArray.pop)
    for(let  i= a.length-1; i>=0; i--){
            if(a[i] !== -1){
                let sortedValue = uniqueArray.pop()
                a[i] = sortedValue
            }
        }
    return a
} 