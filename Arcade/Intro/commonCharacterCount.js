function solution(s1, s2) {
    if(s1.length == 0 || s2.length == 0){
        return 0
    }
    let charCount = 0
    let newS1 = new Map()
    let newS2 = new Map()
    for(let i = 0; i<s1.length; i++){
        if(newS1.has(s1[i])){
            newS1.set(s1[i],newS1.get(s1[i]) + 1)
        }else{
            newS1.set(s1[i],1)
        }
    }
    
    for(let i = 0; i<s2.length; i++){
         if(newS2.has(s2[i])){
            newS2.set(s2[i],newS2.get(s2[i])+ 1)
        }else{
            newS2.set(s2[i],1)
        }
    }
    
    for(let [char,amount] of newS1){
        if(newS2.has(char)){
           charCount += Math.min(amount,newS2.get(char))
           console.log("value s2",newS2.get(char))
           console.log("value s1",newS1.get(char))
        }
    }
    return charCount
    
 }