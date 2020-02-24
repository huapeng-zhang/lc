
function combinationWrap(chars) {
    const ret = [];

    if (chars && chars.length) {
        chars.sort();
        combination(chars, 0, [], ret);
    }
    return ret;
}

function combination(chars, startPos, stack, ret) {
    if (startPos === chars.length) {
        stack.length && ret.push(stack.join(''));
        return;
    }

    for (let i = startPos; i < chars.length; i++) {
        if (i > startPos && chars[i-1] === chars[i]) {
            continue;
        }

        stack.push(chars[i]);
        combination(chars, i+1, stack, ret);
        stack.pop();
    }

    combination(chars, chars.length, stack, ret);
}

module.exports = combinationWrap;
