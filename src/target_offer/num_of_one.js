
function numOfOne(num) {
    if (num === null || num === undefined) {
        return 0;
    }

    let count = 0;
    while (num !== 0) {
        num = num & (num - 1);
        count++;
    }

    return count;
}

module.exports = numOfOne;
