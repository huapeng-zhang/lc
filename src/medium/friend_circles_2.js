/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    if (!M || !M.length) {
        return 0;
    }
    const parent = [];
    let count = M.length;
    for (let i = 0; i < M.length; i++) {
        parent.push(i);
    }

    for (let i = 0; i < M.length; i++) {
        for (let j = i + 1; j < M.length; j++) {
            if (M[i][j] === 1) {
                let parentI = i;
                while (parentI !== parent[parentI])parentI = parent[parentI];
                let parentJ = j;
                while (parentJ !== parent[parentJ])parentJ = parent[parentJ];
                if (parentI === parentJ) {
                    continue;
                } else if (parentI < parentJ) {
                    parent[parentJ] = parentI;
                } else {
                    parent[parentI] = parentJ;
                }
                count--;
            }
        }
    }

    return count;
};

module.exports = findCircleNum;
