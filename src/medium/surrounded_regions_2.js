/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || !board.length) {
        return;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if ((i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) &&
                (board[i][j] === 'O')) {
                scan(i, j, board);
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'X') {
                continue;
            } else if (board[i][j] === 'A') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }
};

function scan(xPos, yPos, board) {
    board[xPos][yPos] = 'A';

    xPos > 0 && board[xPos-1][yPos] === 'O' && scan(xPos-1, yPos, board);
    yPos < board[xPos].length - 1 && board[xPos][yPos+1] === 'O' && scan(xPos, yPos+1, board);
    xPos < board.length - 1 && board[xPos+1][yPos] === 'O' && scan(xPos+1, yPos, board);
    yPos > 0 && board[xPos][yPos-1] === 'O' && scan(xPos, yPos-1, board);
}

module.exports = solve;
