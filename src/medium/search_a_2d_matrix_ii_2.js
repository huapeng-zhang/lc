/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length) {
        return false;
    }

    let row = matrix.length-1;
    let col = 0;

    while (row >= 0 && col < matrix[row].length) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            col++;
        } else {
            row--;
        }
    }
    return false;
};

module.exports = searchMatrix;
