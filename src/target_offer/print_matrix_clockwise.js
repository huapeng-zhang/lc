/**
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
function printMatrixClockWise(matrix) {
    const ret = [];
    if (!matrix || !matrix.length) {
        return ret;
    }

    let startI = 0, endI = matrix.length - 1;
    let startJ = 0, endJ = matrix[0].length - 1;
    while(startI <= endI && startJ <= endJ) {
        let i = startI, j;
        for (j = startJ; j <= endJ; j++) {
            ret.push(matrix[i][j]);
        }
        j = endJ;
        for (i = startI+1; i <= endI; i++) {
            ret.push(matrix[i][j]);
        }
        if (endI != startI) {
            i = endI;
            for (j = endJ - 1; j >= startJ; j--) {
                ret.push(matrix[i][j]);
            }
        }
        if (startJ != endJ) {
            j = startJ;
            for (i = endI - 1; i >= startI + 1; i--) {
                ret.push(matrix[i][j]);
            }
        }
        startI++;
        endI--;
        startJ++;
        endJ--;
    }
    debugger
    return ret;
}

module.exports = printMatrixClockWise;
