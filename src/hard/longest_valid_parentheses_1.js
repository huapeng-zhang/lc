/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0;

    // 保存以第i-1个字符结尾的最长合法字符串长度
    // 状态转移方程：
    // * 若第i个字符为 '('，则dp[i+1] = 0，无法形成有效字符串
    // * 若第i个字符为 ')'，且之前的合法子串之前的字符为'('，则dp[i+1]等于2+')'之前的合法子串长度+'('之前的合法子串长度
    // * dp[0]表示'('之前的合法子串长度，作为保护变量，减少循环中的判断
    const dp = [0,0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')' && s[i-dp[i]-1] === '(') {
            dp[i+1] = dp[i]+2+dp[i-dp[i]-1];
            max < dp[i+1] && (max = dp[i+1]);
        } else {
            dp[i+1] = 0;
        }
    }
    return max;
};

module.exports = longestValidParentheses;
