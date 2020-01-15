/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // dp[i+1]：以i结束时能保存的最大雨水量，dp[0]用来做保护变量。
    const dp = [0, 0];

    for (let i = 1; i < height.length; i++) {
        // 若height[i]小于height[i-]，那么dp[i+1]=dp[i]
        if (height[i] <= height[i-1]) {
            dp[i+1] = dp[i];
            continue;
        }

        // 找到i之前最高高度的位置，记为leftPos。那么dp[i]=[leftPos,i]之前能够保存的雨水量+dp[leftPos+1]
        let leftPos = i-1;
        // 当前扫描到的最高高度
        let curHighestHeight = height[i-1];
        // 扫描到leftPos时的最高高度，与leftPos同步更新
        let highestHeight = curHighestHeight;
        // 当前扫描到的最低高度
        let curLowestHeight = height[i-1];
        // 扫描到leftPos时的最低高度，与leftPos同步更新
        let lowestHeight = curLowestHeight;
        // 除去i和当前位置的高度累计值
        let curAcc = height[i-1];
        // 扫描到leftPos时的高度累计值，与leftPos同步更新
        let acc = curAcc;

        // 找到位置i之前的最高高度，如扫描到的高度大于或等于当前高度，则无需继续向前扫描
        for (let j = i-2; j >= 0; j--) {
            curHighestHeight = curHighestHeight > height[j] ? curHighestHeight : height[j];
            curLowestHeight = curLowestHeight < height[j] ? curLowestHeight : height[j];

            if (height[j] >= highestHeight) {
                leftPos = j;
                highestHeight = curHighestHeight;
                lowestHeight = curLowestHeight;
                acc = curAcc;
                // 判断是否可以退出扫描
                if (highestHeight >= height[i]) {
                    break;
                }
            }
            curAcc += height[j];
        }

        const minHeight = height[i] < height[leftPos] ? height[i] : height[leftPos];
        // 若当前高度与之前最大高度是线性曾或线性减的，则当前的雨水收集能力与之前位置相同
        if (lowestHeight >= minHeight) {
            dp[i+1] = dp[i];
        // 否则，当前的雨水收集能力dp[i+1]=[leftPos,i]之前的雨水收集能力加上dp[leftPos+1]
        } else {
            dp[i+1] = dp[leftPos+1]+(i-leftPos-1)*minHeight-acc;
        }
    }

    return dp[height.length];
};

module.exports = trap;
