/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    let low = 1;
    let high = piles[0];
    for (let i = 0; i < piles.length; i++) {
        piles[i] > high && (high = piles[i]);
    }

    while (low < high) {
        const mid = ((high - low) >> 1) + low;

        let totalTime = 0;
        for (let i = 0; i < piles.length; i++) {
            totalTime += Math.ceil(piles[i]/mid);
        }
        if (totalTime > H) {
            low = mid+1;
        } else {
            // 退出循环的条件是low == high，但又必须满足总时间小于H，所以high不能是mid-1
            high = mid;
        }
    }

    return high;
};

module.exports = minEatingSpeed;
