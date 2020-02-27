
function maxLuckNum(luck, limit) {
    if (!luck || !luck.length) {
        return null;
    }

    const luckHash = {};
    for (let i = 0; i < luck.length; i++) {
        luckHash[luck[i]] = true;
    }
    const num = [];
    for (let i = 0; i < limit.length; i++) {
        num.push(limit.charCodeAt(i) - '0'.charCodeAt(0));
    }

    while (!isZero(num) && !isLuckNum(num, luckHash)) subOne(num);

    if (isZero(num) && !luckHash[0]) {
        return null;
    }
    return num.join('');
}

function subOne(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        num[i]--;
        if (num[i] >= 0) {
            break;
        } else {
            num[i] += 10;
        }
    }
    if (num[0] === 0 && num.length > 1) {
        num.splice(0,1);
    }
}

function isLuckNum(num, luck) {
    for (let i = 0; i < num.length; i++) {
        if (!luck[num[i]]) {
            return false;
        }
    }
    return true;
}

function isZero(num) {
    return num.length === 1 && num[0] === 0;
}

module.exports = maxLuckNum;
