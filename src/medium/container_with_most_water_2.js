/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (!height || height.length <= 1) {
        return 0;
    }

    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const curArea = (right - left) * (height[left] < height[right] ? height[left] : height[right]);

        if (curArea > max) {
            max = curArea;
        }

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

module.exports = maxArea;
