/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num === 1) {
        return true;
    }
    if (num < 4) {
        return false;
    }

    const test = 0b01010101010101010101010101010100;
    return ((num & (num-1)) === 0) && ((num & test) === num);
};

module.exports = isPowerOfFour;