/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const lowerInput = s.toLowerCase();

    let startIdx = 0;
    let endIdx = lowerInput.length - 1;

    while (startIdx < endIdx) {
        while(startIdx < lowerInput.length && !isValidChar(lowerInput[startIdx])) {
            startIdx++;
        }
        while(endIdx >= 0 && !isValidChar(lowerInput[endIdx])) {
            endIdx--;
        }

        if (startIdx >= endIdx) {
            return true;
        }

        if (lowerInput[startIdx] != lowerInput[endIdx]) {
            return false;
        }

        startIdx++;
        endIdx--;
    }

    return true;
};

function isValidChar(c) {
    if (c <= 'z' && c >= 'a' || c <= '9' && c >= '0') {
        return true;
    }
    return false;
}

module.exports = isPalindrome;
