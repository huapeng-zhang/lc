/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (find(board, i, j, {}, word, 0)) {
                return true;
            }
        }
    }
    return false;
};

function find(board, startX, startY, usedPos, word, checkPos) {
    if (checkPos >= word.length) {
        return true;
    }
    if (startX < 0 || startX >= board.length) {
        return false;
    }
    if (startY < 0 || startY >= board[startX].length) {
        return false;
    }

    if (board[startX][startY] !== word.charAt(checkPos)) {
        return false;
    }

    const key = `${startX}:${startY}`;
    if (usedPos[key] === true) {
        return false;
    }
    usedPos[key] = true;

    const ret = (
        find(board, startX-1, startY, usedPos, word, checkPos+1) ||
        find(board, startX+1, startY, usedPos, word, checkPos+1) ||
        find(board, startX, startY-1, usedPos, word, checkPos+1) ||
        find(board, startX, startY+1, usedPos, word, checkPos+1));

    usedPos[key] = (void 0);
    return ret;
}

module.exports = exist;
