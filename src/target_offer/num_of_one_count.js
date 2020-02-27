
function oneCount(num) {
    if (num <= 0) {
        return 0;
    }

    let count = 0;
    let level = 1;
    while (level <= num) {
        const front = num - num % (level * 10);
        const digit = Math.floor((num - front)/level);
        const tail = num - front - digit*level;

        count += front/10;
        if (digit === 1) {
            count = count + tail + 1;
        }
        if (digit > 1) {
            count += level;
        }

        level *= 10;
    }

    return count;
}

module.exports = oneCount;
