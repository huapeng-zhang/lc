/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;

    for (let i = 0; i < height.length; i++) {
        const curArea = height[i] * maxWidth(height, i);
        if (max < curArea) {
            max = curArea;
        }
    }

    return max;
};

function maxWidth(heights, minPos) {
    let pos = heights.length;
    while (pos > minPos) {
        if (heights[pos] >= heights[minPos]) {
            break;
        }
        pos--;
    }
    const rightWidth = pos - minPos;

    pos = 0;
    while (pos < minPos && (minPos - pos) > rightWidth) {
        if (heights[pos] >= heights[minPos]) {
            break;
        }
        pos++;
    }
    const leftWidth = minPos - pos;

    return leftWidth > rightWidth ? leftWidth : rightWidth;
}

module.exports = maxArea;
