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
    let ret = absPower(base, absExp, {});

    if (exponent < 0) {
        ret = 1/ret;
    }
    return ret;
}

function equals(num1, num2) {
    const delta = num1 - num2;
    return delta <= Number.EPSILON && delta >= -Number.EPSILON;
}

function absPower(base, absExp, cache) {
    if (cache[absExp] !== undefined) {
        return cache[absExp];
    }

    let ret = base;
    if (absExp > 1) {
        const subExp = absExp >> 1;
        ret = absPower(base, subExp, cache);
        ret *= ret;
        if ((absExp & 1) === 1) {
            ret *= base;
        }
    }
    cache[absExp] = ret;
    return ret;
}

module.exports = power;
