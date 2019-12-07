/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || !s.length) {
        return 0;
    }

    let s1 = 0;
    let s2 = 1;
    let preNum = 0;
    let aBase = '0'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const curNum = s.charCodeAt(i) - aBase;
        const unionNum = preNum*10 + curNum;
        let s3;
        if (preNum > 0 && unionNum <= 26 && curNum > 0) {
            s3 = s1 + s2;
        } else if (curNum > 0) {
            s3 = s2;
        } else if (preNum > 0 && unionNum <= 26) {
            s3 = s1;
        } else {
            return 0;
        }
        s1 = s2;
        s2 = s3;
        preNum = curNum;
    }

    return s2;
};

module.exports = numDecodings;
