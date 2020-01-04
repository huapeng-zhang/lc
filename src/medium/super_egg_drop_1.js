/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    // dp[i][j]：表示i个鸡蛋，j次操作可以检查的楼层数
    // dp[i]：表示有i个鸡蛋最多可以搜索的楼层，为了减少空间消耗，仅用一维数组
    const dp = [0];
    // 初始化，仅用一次操作时，可以检查的楼层数
    for (let i = 0; i < K; i++) {
        dp.push(1);
    }

    let steps = 1;
    while(true) {
        if (dp[K] >= N) {
            return steps;
        }
        // 更新dp[i]时会用到dp[i-1]因此必须从后往前更新
        for (let i = K; i >= 1; i--) {
            // 若新的一步鸡蛋碎了，那么可以继续搜索dp[i-1]层，如没碎，则可以继续搜索dp[i]层
            dp[i] = dp[i] + dp[i-1] + 1;
        }
        steps++;
    }
};

module.exports = superEggDrop;
