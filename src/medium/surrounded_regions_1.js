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
            if ((i === 0 || j === 0 || i === board.length-1 || j === board[i].length-1) && board[i][j] === 'O') {
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
    const stack = [[xPos, yPos]];
    const stackContext = [0];

    while (stack.length) {
        const [i, j] = stack.pop();
        const context = stackContext.pop();

        if (context === 0) {
            if (board[i][j] === 'A') {
                continue;
            } else {
                board[i][j] = 'A';
            }
        }

        if (context <= 3) {
            stack.push([i,j]);
            stackContext.push(context+1);
        } else {
            continue;
        }

        switch(context) {
            case 0:
                if (i > 0 && board[i-1][j] === 'O') {
                    stack.push([i-1, j]);
                    stackContext.push(0);
                }
                break;
            case 1:
                if (j < board[i].length-1 && board[i][j+1] === 'O') {
                    stack.push([i, j+1]);
                    stackContext.push(0);
                }
                break;
            case 2:
                if (i < board.length-1 && board[i+1][j] === 'O') {
                    stack.push([i+1, j]);
                    stackContext.push(0);
                }
                break;
            case 3:
                if (j > 0 && board[i][j-1] === 'O') {
                    stack.push([i, j-1]);
                    stackContext.push(0);
                }
                break;
        }
    }
}

module.exports = solve;
