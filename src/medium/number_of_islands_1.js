/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let nextNo = 1;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== '1') {
                continue;
            }

            nextNo++;
            const stack = [[i,j]];
            while(stack.length) {
                const [xPos,yPos] = stack.pop();
                let x,y;
                x = xPos - 1;
                y = yPos;
                x >= 0 && grid[x][y] === '1' && (stack.push([x,y]) && (grid[x][y] = nextNo));
                x = xPos;
                y = yPos + 1;
                y < grid[x].length && grid[x][y] === '1' && (stack.push([x,y]) && (grid[x][y] = nextNo));
                x = xPos + 1;
                y = yPos;
                x < grid.length && grid[x][y] === '1' && (stack.push([x,y]) && (grid[x][y] = nextNo));
                x = xPos;
                y = yPos - 1;
                y >= 0 && grid[x][y] === '1' && (stack.push([x,y]) && (grid[x][y] = nextNo));
            }
        }
    }
    return nextNo-1;
};

module.exports = numIslands;
