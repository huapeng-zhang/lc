/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || !matrix.length) {
        return 0;
    }

    const zero = '0';
    let maxWidth = 0;
    let lastRowRet = [];
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === zero) {
            lastRowRet.push(0);
        } else {
            lastRowRet.push(1);
            maxWidth = 1;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        let cornerWith = 0;
        let lastWidth = 0;
        let minWidth;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === zero) {
                minWidth = 0;
            } else {
                minWidth = lastWidth < cornerWith ? lastWidth : cornerWith;
                minWidth = minWidth < lastRowRet[j] ? minWidth : lastRowRet[j];
                minWidth += 1;
            }

            cornerWith = lastRowRet[j];
            lastRowRet[j] = minWidth;
            lastWidth = minWidth;

            maxWidth = maxWidth < minWidth ? minWidth : maxWidth;
        }
    }

    return maxWidth * maxWidth;
};

module.exports = maximalSquare;
