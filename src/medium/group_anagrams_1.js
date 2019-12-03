/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    const keyLen = 26;
    const aIndex = 'a'.charCodeAt(0);

    strs.forEach(str => {
        const key = new Array(keyLen).fill(0);
        for (let i = 0; i < str.length; i++) {
            const index = str.charCodeAt(i) - aIndex;
            key[index]++;
        }
        const keyStr = key.join('-');

        if (hash[keyStr] === (void 0)) {
            hash[keyStr] = [str];
        } else {
            hash[keyStr].push(str);
        }
    });

    return Object.values(hash);
};

module.exports = groupAnagrams;
