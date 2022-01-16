function solution(a) {
    let absMap = new Map()
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        
        for(let j = 0; j < a.length; j++){
            sum += Math.abs(a[i] - a[j])
        }
        absMap.set(a[i],sum)
        sum = 0
    }
     let smallestValue = Math.min(...absMap.values())
     for(let [key,value] of absMap){
         if(value === smallestValue){
             return key
         }
     }
}