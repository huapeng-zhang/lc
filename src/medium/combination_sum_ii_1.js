/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (!candidates || !candidates.length) {
        return [];
    }

    candidates.sort((a, b) => a - b);

    const result = [];
    help(0, result, [], target, candidates);
    return result;
};

function help(startPos, result, list, remain, candidates) {
    if (remain === 0) {
        result.push([...list]);
        return;
    } else if (remain < candidates[startPos] || startPos >= candidates.length) {
        return;
    }

    for (let i = startPos; i < candidates.length; i++) {

        if (i > startPos && candidates[i] === candidates[i-1]) {
            continue;
        }

        list.push(candidates[i]);
        help(i+1, result, list, remain - candidates[i], candidates);
        list.pop();
    }
}

module.exports = combinationSum2;