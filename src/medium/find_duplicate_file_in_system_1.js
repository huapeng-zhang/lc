/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    if (!paths || !paths.length) {
        return [];
    }

    const hash = {};
    for (let i = 0; i < paths.length; i++) {
        const dir = paths[i];
        let pos = 0;
        while (dir.charAt(pos) !== ' ')pos++;
        const path = dir.substring(0, pos);

        pos++;
        let startPos = pos;
        while (pos < dir.length) {
            while (dir.charAt(pos) != '(')pos++;
            const fileName = dir.substring(startPos, pos++);
            startPos = pos;
            while (dir.charAt(pos) !== ')')pos++;
            const content = dir.substring(startPos, pos++);
            pos < dir.length && pos++;
            startPos = pos;

            if (!hash[content]) {
                hash[content] = [];
            }
            hash[content].push(path+'/'+fileName);
        }
    }

    const ret = [];
    for (const key in hash) {
        if (hash[key].length > 1) {
            ret.push(hash[key]);
        }
    }
    return ret;
};

module.exports = findDuplicate;
