/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length) {
        return false;
    }
    return help(0, matrix.length-1, 0, matrix[0].length-1, matrix, target)
};

function help(rowStart, rowEnd, colStart, colEnd, matrix, target) {
    const rowMid = ((rowEnd-rowStart) >> 1) + rowStart;
    const colMid = ((colEnd-colStart) >> 1) + colStart;

    if (matrix[rowMid][colMid] === target) {
        return true;
    } else if (matrix[rowMid][colMid] < target) {
        let ret = colMid < colEnd && help(rowStart, rowEnd, colMid+1, colEnd, matrix, target);
        ret = ret ||rowMid < rowEnd && help(rowMid+1, rowEnd, colStart, colMid, matrix, target);
        return ret;
    } else if (matrix[rowMid][colMid] > target) {
        let ret = rowMid > rowStart && help(rowStart, rowMid-1, colStart, colEnd, matrix, target);
        ret = ret || colMid > colStart && help(rowMid, rowEnd, colStart, colMid - 1, matrix, target);
        return ret;
    }
    return false;
}

module.exports = searchMatrix;
