/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result = 0;
    let remainDividend = dividend < 0 ? -dividend : dividend;
    let absDivisor = divisor < 0 ? -divisor : divisor;

    while(remainDividend >= absDivisor) {
        let temp = absDivisor;
        let tempRet = 1;

        while (remainDividend >= temp) {
            result += tempRet;
            remainDividend -= temp;

            if (temp > (temp << 1)) {
                continue;
            }
            temp = (temp << 1);
            tempRet = (tempRet << 1);
        }
    }

    if ((dividend >= 0 && divisor >= 0) || (dividend <= 0 && divisor <= 0)) {
        if (result === 2147483648) {
            result = 2147483647
        }
        return result;
    } else {
        return -result;
    }
};

module.exports = divide;
