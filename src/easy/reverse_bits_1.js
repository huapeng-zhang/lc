/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const h1 = 0x80000000;
    let ret = 0;

    for (let i = 0; i < 32; i++) {
        if ((n & 1) === 1) {
            ret = ret | (h1 >>> i);
        }
        n = n >>> 1;
    }
    return ret >>> 0;
};

module.exports = reverseBits;