/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (x + y < z) {
        return false;
    }
    if (z === 0) {
        return true;
    }
    if (x === 0) {
        return y === z;
    }
    if (y === 0) {
        return x === z;
    }

    let gcd = x < y ? x : y;

    while(gcd > 1) {
        if (x % gcd === 0 && y % gcd === 0) {
            break;
        } else {
            gcd--;
        }
    }

    return z % gcd === 0;
};

module.exports = canMeasureWater;
