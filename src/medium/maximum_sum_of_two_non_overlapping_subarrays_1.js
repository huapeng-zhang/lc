/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
    let lastL = 0;
    let lastM = 0;
    let sum = 0;

    const dpl = new Array(A.length).fill(0);
    const dpm = new Array(A.length).fill(0);
    const dp = new Array(A.length).fill(0);

    for (let i=0; i < L+M; i++) {
        sum += A[i];

        if (i === L-1) {
            lastL = sum;
            dpl[i] = lastL;
        } else if (i > L-1) {
            lastL = lastL + A[i] - A[i-L];
            dpl[i] = lastL > dpl[i-1] ? lastL : dpl[i-1];
        }

        if (i === M-1) {
            lastM = sum;
            dpm[i] = lastM;
        } else if (i > M-1) {
            lastM = lastM + A[i] - A[i-M];
            dpm[i] = lastM > dpm[i-1] ? lastM : dpm[i-1];
        }
    }
    dp[L+M-1] = sum;

    for (let i = L+M; i < A.length; i++) {
        lastL = lastL + A[i] - A[i-L];
        lastM = lastM + A[i] - A[i-M];
        dpl[i] = lastL > dpl[i-1] ? lastL : dpl[i-1];
        dpm[i] = lastM > dpm[i-1] ? lastM : dpm[i-1];

        let tmp = dp[i-1];
        tmp = tmp > lastM + dpl[i-M] ? tmp : lastM + dpl[i-M];
        tmp = tmp > lastL + dpm[i-L] ? tmp : lastL + dpm[i-L];

        dp[i] = tmp;
    }

    return dp[A.length-1];
};

module.exports = maxSumTwoNoOverlap;
