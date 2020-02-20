
function permutation(chars) {
    let ret = [];
    if (!chars || !chars.length) {
        return ret;
    }
    permute([], chars, ret);
    return ret;
}

function permute(stack, chars, ret) {
    if (stack.length === chars.length) {
        ret.push([...stack].join(''));
        return;
    }

    let preStr = null;
    for (let i = 0; i < chars.length; i++) {
        const str = chars[i];
        if (str === null || str === preStr) {
            continue;
        }

        stack.push(str);
        chars[i] = null;
        permute(stack, chars, ret);
        preStr = stack.pop();
        chars[i] = str;
    }
}

module.exports = permutation;
