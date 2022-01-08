function solution(cell1, cell2) {
    return findColor(cell1) === findColor(cell2)
    
}

function findColor(cell){
    let board = "*ABCDEFGH"
    let sumOfIndexes = board.indexOf(cell[0]) + parseInt(cell.slice(1))
    if((sumOfIndexes % 2) === 0){
        return "dark"
    }else{
        return "light"
    }
}