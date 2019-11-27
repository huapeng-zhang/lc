/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    return help(s, 0, s.length-1)
};

function help(s, start, end) {
    if (!s || !s.length) {
        return 0;
    }

    if (start == end) {
        return 1;
    }

    const chars = new Set();
    const middle = Math.floor((start+end)/2);

    let leftPos = middle-1;
    let rightPos = middle+1;
    chars.add(s[middle]);
    while(leftPos >= start) {
        if (chars.has(s[leftPos])) {
            break;
        } else {
            chars.add(s[leftPos]);
            leftPos--;
        }
    }
    while(rightPos <= end) {
        if (chars.has(s[rightPos])) {
            break;
        } else {
            chars.add(s[rightPos]);
            rightPos++;
        }
    }

    const leftMaxSize = help(s, start, middle);
    const rightMaxSize = help(s, middle+1, end);

    if (leftMaxSize > rightMaxSize) {
        return leftMaxSize > chars.size ? leftMaxSize : chars.size;
    } else {
        return rightMaxSize > chars.size ? rightMaxSize : chars.size;
    }
}

module.exports = lengthOfLongestSubstring;