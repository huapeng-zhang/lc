/**
 * 返回字符串中各个字符所对应的unit数值数组
 * @param {string} str
 */
function toIntArray(str) {
    if (str === null || str === undefined) {
        return null;
    }

    const codePoints = [];
    for (let i = 0; i < str.length; i++) {
        codePoints.push(str.codePointAt(i));
    }
    return codePoints;
}

module.exports = {
    toIntArray
};
