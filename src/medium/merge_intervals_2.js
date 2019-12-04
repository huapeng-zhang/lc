/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i+1][0] && intervals[i][0] <= intervals[i+1][1]) {
            intervals[i+1][0] = intervals[i][0];
            intervals[i+1][1] = intervals[i][1] > intervals[i+1][1] ? intervals[i][1] : intervals[i+1][1];

            intervals[i] = null;
        }
    }

    const result = [];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i]) {
            result.push(intervals[i]);
        }
    }
    return result;
};

module.exports = merge;
