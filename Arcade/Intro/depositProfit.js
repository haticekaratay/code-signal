function solution(deposit, rate, threshold) {
    let sum = deposit
    let yearCount = 0
    while(sum<threshold){
        sum += (sum*rate)/100
        yearCount++
    }
    return yearCount
}