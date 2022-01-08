function solution(name) {
    
    let data = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ1234567890_"
    let dataArray = data.split("")
    if(name[0]>= "0" && name[0] <= "9") return false
    
    for(let i = 0; i<name.length; i++){
        if(!dataArray.includes(name[i])){
            return false
        }
    }
    return true
    
}
