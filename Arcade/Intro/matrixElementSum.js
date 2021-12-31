function solution(matrix) {
    console.log(matrix.length)
    let sum = 0;
    let hauntedRooms = []
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            if(matrix[i][j] === 0){
                hauntedRooms.push(j) 
            }else{
                if(!hauntedRooms.includes(j)){
                    sum+= matrix[i][j]
                }
            }
        }
    }
    return sum
}