function solution(a, b) {
    let mismatch = 0
    
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            mismatch++
        }
    }
    a.sort((a,b)=> a-b)
    b.sort((a,b)=> a-b)
    if(a.join("")===b.join("") && mismatch<= 2) return true
    else return false
}