/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const hash1 = {};

    if (!A || !A.length) {
        return 0;
    }

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            let key = A[i]+B[j];
            if (hash1[key]) {
                hash1[key]++;
            } else {
                hash1[key] = 1;
            }
        }
    }

    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            count += hash1[-C[i]-D[j]] || 0;
        }
    }

    return count;
};

module.exports = fourSumCount;
