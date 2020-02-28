
function firstNonrepeatedLetter(str) {
    if (!str || !str.length) {
        return null;
    }

    const statistics = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str.charAt(i);
        if (!statistics[letter]) {
            statistics[letter] = {order: i, count: 0};
        }

        const detail = statistics[letter];
        detail.count++;
    }

    let firstLetter = null;
    for (const letter in statistics) {
        const detail = statistics[letter];
        if (detail.count !== 1) {
            continue;
        }

        if (firstLetter === null || statistics[firstLetter].order > detail.order) {
            firstLetter = letter;
        }
    }

    return firstLetter;
}

module.exports = firstNonrepeatedLetter;
