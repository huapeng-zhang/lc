/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let maxWidth = 0;

    const zero = '0';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === zero) {
                matrix[i][j] = 0;
            } else {
                let upWidth = i > 0 ? matrix[i-1][j] : 0;
                let leftWidth = j > 0 ? matrix[i][j-1] : 0;
                let upLeftWidth = i > 0 && j > 0 ? matrix[i-1][j-1] : 0;

                upWidth = upWidth < leftWidth ? upWidth : leftWidth;
                upWidth = upWidth < upLeftWidth ? upWidth : upLeftWidth;

                matrix[i][j] = upWidth + 1;
                maxWidth = maxWidth > matrix[i][j] ? maxWidth : matrix[i][j];
            }
        }
    }
    return maxWidth * maxWidth;
};

module.exports = maximalSquare;
