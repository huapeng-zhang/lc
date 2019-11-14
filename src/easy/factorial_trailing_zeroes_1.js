
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    return find5(n);
};

function find2(num) {
    let count = 0;

    while ((num & 1) === 0) {
        count++;
        num = num >> 1;
    }
    return count;
}

function find5(num) {
    let ret;
    let count = 0;
    let divisor = 5;
    while ((ret = Math.floor(num/divisor)) > 0) {
        divisor *= 5;
        count += ret;
    }
    return count;
}

module.exports = trailingZeroes;