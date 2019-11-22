/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let sum = a ^ b;
    let left = a & b;

    while(left !== 0) {
        left = left << 1;

        const preSum = sum;
        sum = sum ^ left;
        left = preSum & left;
    }

    return sum;
};

module.exports = getSum;
