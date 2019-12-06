/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let storeX = null;
    let storeY = null;

    debugger
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (storeX === null) {
                    storeX = i;
                    storeY = j;
                } else {
                    matrix[storeX][j] = 0;
                    matrix[i][storeY] = 0;
                }
            }
        }
    }

    if (storeX === null) {
        return;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i === storeX) {
            continue;
        }
        if (matrix[i][storeY] === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 0; j < matrix[storeX].length; j++) {
        if (matrix[storeX][j] === 0) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 0; j < matrix[storeX].length; j++) {
        matrix[storeX][j] = 0;
    }
};

module.exports = setZeroes;
