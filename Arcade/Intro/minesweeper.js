function solution(matrix) {
    let board = []
    // let board = new Array(matrix.length).fill(new Array(matrix[0].length).fill(0))
   
    for(let i = 0; i<matrix.length; i++){
        board.push([])
        for(let j = 0; j<matrix[0].length; j++){
            board[i][j] =0
            if(matrix[i-1] !== undefined && matrix[i-1][j]) board[i][j]++
            
            if(matrix[i+1] !== undefined && matrix[i+1][j]) board[i][j]++
            
            if(matrix[i][j-1] !== undefined && matrix[i][j-1]) board[i][j]++
            
            if(matrix[i][j+1] !== undefined && matrix[i][j+1]) board[i][j]++
            
            if(matrix[i-1] !== undefined && matrix[i-1][j-1]) board[i][j]++
            
            if(matrix[i-1] !== undefined && matrix[i-1][j+1]) board[i][j]++
            
            if(matrix[i+1] !== undefined && matrix[i+1][j-1]) board[i][j]++ 
            
            if(matrix[i+1] !== undefined && matrix[i+1][j+1]) board[i][j]++
            
        }
        
    }
    return board
}