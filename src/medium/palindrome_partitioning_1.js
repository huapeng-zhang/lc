/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const ret = [];
    backtrack(0, [], ret, s);
    return ret;
};

/**
 *
 * @param {number} start
 * @param {string[]} tempList
 * @param {string[][]} list
 * @param {string} str
 * @return void
 */
function backtrack(start, tempList, list, str) {
    if (start >= str.length) {
        list.push([...tempList]);
        return;
    }
    for (let end = start; end < str.length; end++) {
        let isPalindrome = true;
        for (let i=start,j=end;i<j;i++,j--) {
            if (str[i] !== str[j]) {
                isPalindrome = false;
                break;
            }
        }
        if (!isPalindrome) {
            continue;
        }

        tempList.push(str.substr(start, end-start+1));
        backtrack(end+1, tempList, list, str);
        tempList.pop();
    }
}

module.exports = partition;
