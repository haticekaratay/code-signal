function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    if(yourLeft+yourRight != friendsLeft+friendsRight) return false
    if((yourLeft == friendsLeft || yourLeft==friendsRight) && ( yourRight == friendsLeft || yourRight == friendsRight)){
        return true
    }else{
        return false
    }
    return true
}
