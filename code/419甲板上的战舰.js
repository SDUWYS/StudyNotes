/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let row = board.length;
    let col = board[0].length;
    let res = 0;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === 'X'){
                board[i][j] = '.';
                for(let k = j + 1; k < col && board[i][k] === 'X'; k++){
                    board[i][k] = '.';
                }
                for(let k = i + 1; k < row && board[k][j] === 'X'; k++){
                    board[k][j] = '.';
                }
                res++;
            }
        }
    }
    return res;
};