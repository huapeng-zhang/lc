/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const width = matrix.length;
    let min = matrix[0][0];
    let max = matrix[width-1][width-1];

    while (min < max) {
        let mid = ((max-min) >> 1) + min;
        let lessEqualCount = 0;
        for (let i = 0; i < width; i++) {
            if (matrix[i][0] > mid) {
                break;
            }
            for (let j = 0; j < width; j++) {
                if (matrix[i][j] <= mid) {
                    lessEqualCount++;
                } else {
                    break;
                }
            }
        }

        if (lessEqualCount < k) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
};

module.exports = kthSmallest;
