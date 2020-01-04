/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let firstSum = 0;
    let secondSum = 0;
    let lowPos = 0;
    let highPos = piles.length - 1;
    let firstTurn = true;

    while (lowPos < highPos) {
        let max, min;
        if (piles[lowPos] < piles[highPos]) {
            min = piles[lowPos];
            max = piles[highPos];
        } else {
            min = piles[highPos];
            max = piles[lowPos];
        }
        if (firstTurn) {
            firstSum += max;
            secondSum += min;
        } else {
            firstSum += min;
            secondSum += max;
        }

        lowPos++;
        highPos--;
        firstTurn != firstTurn;
    }

    return firstSum > secondSum;
};

module.exports = stoneGame;
