/**
 * 计算base的exponent次方
 * @param {number} base
 * @param {number} exponent
 */
function power(base, exponent) {
    if (equals(base, 0) && exponent < 0) {
        throw new Error('Base is zero and exponent is negative');
    }

    if (equals(exponent, 0)) {
        return 1;
    }

    const absExp = exponent > 0 ? exponent : -exponent;
    let ret = base;
    for (let i = 1; i < absExp; i++) {
        ret *= base;
    }

    if (exponent < 0) {
        ret = 1/ret;
    }
    return ret;
}

function equals(num1, num2) {
    const delta = num1 - num2;
    return delta <= Number.EPSILON && delta >= -Number.EPSILON;
}

module.exports = power;
