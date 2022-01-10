function solution(n, firstNumber) {
    for(let i = 0; i<n; i++){
        if(firstNumber<n/2){
            return firstNumber+(n/2)
        }else{
            return firstNumber-(n/2)
        }
    }
}
