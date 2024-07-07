/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    const check = (dx, dy) => {
        let x = rMove + dx, y = cMove + dy;
        let step = 1;
        while(x >= 0 && x < 8 && y >= 0 && y < 8){
            if(step === 1){
                if(board[x][y] === '.' || board[x][y] === color){
                    return false;
                }
            }else{
                if(board[x][y] === '.'){
                    return false;
                }
                if(board[x][y] === color){
                    return true;
                }
            }
            ++step;
            x += dx;
            y += dy;
        }
        return false;
    }
    const dx = [-1, 0, 1, 0, -1, -1, 1, 1];
    const dy = [0, 1, 0, -1, -1, 1, -1, 1];
    for(let i = 0; i < 8; i++){
        if(check(dx[i], dy[i])){
            return true;
        }
    }
    return false;
};