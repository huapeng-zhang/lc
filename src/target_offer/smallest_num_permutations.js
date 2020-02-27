
function smallestPermutation(nums) {
    if (!nums || !nums.length) {
        return null;
    }

    nums.sort((a, b) => compare(a, b));
    return nums.join('');
}

function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }

    let temp = num1;
    let level1 = 1;
    while(temp > 9) {
        temp = Math.floor(temp/10);
        level1 *= 10;
    }
    temp = num2;
    let level2 = 1;
    while(temp > 9) {
        temp = Math.floor(temp/10);
        level2 *= 10;
    }

    let digit1;
    let digit2;
    while(true) {
        if (level1 >= 1) {
            digit1 = Math.floor(num1/level1);
            num1 -= digit1 * level1;
        }
        if (level2 >= 1) {
            digit2 = Math.floor(num2/level2);
            num2 -= digit2 * level2;
        }

        if (digit1 < digit2) {
            return -1;
        }
        if (digit1 > digit2) {
            return 1;
        }

        if (level1 <= 1 && level2 <= 1) {
            return 0;
        }

        level1 /= 10;
        level2 /= 10;
    }
}

module.exports = smallestPermutation;
