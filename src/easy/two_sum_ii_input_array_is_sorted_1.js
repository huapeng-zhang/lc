/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const num2idx = {};

    for (let i = 0; i < numbers.length; i++) {
        const diffIdx = num2idx[target - numbers[i]];
        if (diffIdx !== (void 0) && i !== diffIdx) {
            return i < diffIdx ? [i+1, diffIdx+1] : [diffIdx+1,i+1]
        }
        num2idx[numbers[i]] = i;
    }
};

module.exports = twoSum;