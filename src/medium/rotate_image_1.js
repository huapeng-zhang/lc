/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    for (let k = n, basePos = 0; k > 0; k -= 2, basePos += 1) {
        for (let i = 0; i < k - 1; i++) {
            const x0 = basePos;
            const y0 = basePos + i;

            const x1 = basePos + i;
            const y1 = basePos + k - 1;

            const x2 = basePos + k - 1;
            const y2 = basePos + k - 1 - i;

            const x3 = basePos + k - 1 - i;
            const y3 = basePos;

            const curVal = matrix[x0][y0];
            matrix[x0][y0] = matrix[x3][y3];
            matrix[x3][y3] = matrix[x2][y2];
            matrix[x2][y2] = matrix[x1][y1];
            matrix[x1][y1] = curVal;
        }
    }
};

module.exports = rotate;
