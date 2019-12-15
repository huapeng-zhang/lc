/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array(s.length+1);
    dp[0] = true;
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            if (dp[i-wordDict[j].length] &&
                s.substring(i-wordDict[j].length, i) === wordDict[j]) {
                dp[i] = true;
                continue;
            }
        }
    }
    return dp[s.length] || false;
};

module.exports = wordBreak;
