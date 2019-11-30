/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.sort((a, b) => a - b);

    result = [];
    help(result, [], target, 0, candidates);
    return result;
};

function help(result, list, remain, startIndex, candidates) {
    if (remain === 0) {
        result.push([...list]);
        return;
    } else if (remain < candidates[startIndex]) {
        return;
    }


    for (let i = startIndex; i < candidates.length; i++) {
        list.push(candidates[i]);
        help(result, list, remain - candidates[i], i, candidates);
        list.pop();
    }
}

module.exports = combinationSum;
