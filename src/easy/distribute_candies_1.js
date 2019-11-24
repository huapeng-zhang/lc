/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const set = new Set(candies);

    if (set.size > candies.length/2) {
        return candies.length/2;
    } else {
        return set.size;
    }
};

module.exports = distributeCandies;
