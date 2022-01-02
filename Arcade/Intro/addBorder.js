function solution(picture) {
    let result = []
    let maxX = 0
    

    for(let i = 0; i < picture.length; i++){
        if(picture[i].length > maxX){
            maxX = picture[i].length
        }
        
    }
    let x = maxX + 2    //add asterisks with this length //row
    let y = picture.length + 2 // add asterisks with this dimension //
    let arr = new Array(y).fill("*".repeat(x))
    
    for(let i = 0; i< picture.length; i++){
        arr[i+1]= "*"+picture[i]+"*"
    }
    
    return arr
}