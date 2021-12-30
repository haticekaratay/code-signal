function solution(sequence) {
    let outlierCount = 0
    for(let i = 1; i<sequence.length; i++){
        if(sequence[i-1]>=sequence[i]){
            outlierCount++
            if(outlierCount>1){
                return false
            }
            if(sequence[i+1]<=sequence[i-1] && sequence[i-2]>=sequence[i]){
                return false
            }
        }
    }
    return true
}