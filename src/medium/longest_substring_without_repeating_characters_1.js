/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s || !s.length) {
        return 0;
    }


    const charPos = {};
    charPos[s[0]] = 0;
    let startPos = 0;
    let endPos = 1;
    let maxLen = 1;
    let curLen = 1;
    while (endPos < s.length) {
        const curChar = s[endPos];

        curLen++;
        if (charPos[curChar] !== (void 0)) {
            while (s[startPos] !== curChar) {
                charPos[s[startPos]] = (void 0);
                curLen--;
                startPos++;
            }

            startPos++;
            curLen--;
        } else {
            charPos[curChar] = true;

            if (maxLen < curLen) {
                maxLen = curLen;
            }
        }
        endPos++;
    }

    return maxLen;
};

module.exports = lengthOfLongestSubstring;
