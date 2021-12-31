function solution(statues) {
    statues.sort((a,b)=>a-b)
    console.log("sorted", statues)
    let missingStatues = 0
    for(let i = 0; i<statues.length-1; i++){
       if(statues[i+1]-statues[i]!==1){
           missingStatues += (statues[i+1]-statues[i]-1)
           console.log(missingStatues)
       }
    }
   return missingStatues
}
