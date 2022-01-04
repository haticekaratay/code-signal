function solution(image) {
    let x = image.length-2
    let y = image[0].length -2
    let answer = []
    for(let i = 0; i < x; i++){
        let sumY = []
        for(let j = 0; j< y ; j++){
            let topRow = image[i][j] + image[i][j+1] + image[i][j+2] 
            let midRow = image[i+1][j] + image[i+1][j+1] + image[i+1][j+2]
            let bottomRow= image[i+2][j] + image[i+2][j+1] + image[i+2][j+2]
            sumY.push(Math.floor((topRow+midRow+bottomRow)/9))
        }
        answer.push(sumY)
    }
    return answer
}