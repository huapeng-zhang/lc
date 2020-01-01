/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    if (!M || !M.length) {
        return 0;
    }
    let nextGroup = 2;
    for (let i = 0; i < M.length; i++) {
        if (M[i][i] > 1) {
            continue;
        }
        M[i][i] = nextGroup;
        const stack = [i];
        while (stack.length) {
            const k = stack.pop();
            for (let j = 0; j< M.length; j++) {
                if (M[j][j] > 1) {
                    continue;
                } else if (M[k][j] === 1) {
                    M[j][j] = nextGroup;
                    stack.push(j);
                }
            }
        }
        nextGroup++;
    }

    return nextGroup - 2;
};

module.exports = findCircleNum;
