/**
 *
 * @param {int[]} codes
 */
function replaceBlank(codes) {
    if (!codes || !codes.length) {
        return;
    }

    const blankCode = ' '.codePointAt(0);
    const percentCode = '%'.codePointAt(0);
    const twoCode = '2'.codePointAt(0);
    const zeroCode = '0'.codePointAt(0);

    let diff = 0;
    for (let i = 0; i < codes.length; i++) {
        if (codes[i] === blankCode) {
            diff += 2;
        }
    }

    let pos = codes.length - 1;
    while(diff > 0) {
        if (codes[pos] !== blankCode) {
            codes[pos+diff] = codes[pos];
        } else {
            codes[pos+diff] = zeroCode;
            diff--;
            codes[pos+diff] = twoCode;
            diff--;
            codes[pos+diff] = percentCode;
        }
        pos--;
    }
}

module.exports = replaceBlank;
