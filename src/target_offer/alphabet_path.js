const A_CODE = 'a'.charCodeAt(0);

function alphabetPath(source, target, forbiddenArray) {
    if (!source || !source.length || source.length !== target.length) {
        return null;
    }

    forbiddenArray = !forbiddenArray ? [] : forbiddenArray;
    const forbiddenHash = {};
    for (let i = 0; i < forbiddenArray.length; i++) {
        forbiddenHash[forbiddenArray[i]] = true;
    }

    const ret = [];
    nextPoint(source, target, [source], ret, forbiddenHash);
    return ret;
}

function nextPoint(source, target, stack, ret, forbiddenHash) {
    if (source === target) {
        ret.push([...stack]);
    }

    for (let i = 0; i < source.length; i++) {
        let sCode = source.charCodeAt(i) - A_CODE;
        let tCode = target.charCodeAt(i) - A_CODE;
        const delta = tCode - sCode;

        if (delta === 0) {
            continue;
        } else if (delta > 0) {
            if (delta <= 13) {
                sCode++;
            } else {
                sCode--;
            }
        } else {
            if (delta < -13) {
                sCode++;
            } else {
                sCode--;
            }
        }

        if (sCode < 0) {
            sCode += 26;
        }
        if (sCode >= 26) {
            sCode -= 26;
        }

        let newSource = '';
        for (let j = 0; j < i; j++) {
            newSource += source.charAt(j);
        }
        newSource += String.fromCharCode(sCode+A_CODE);
        for (let j = i+1; j < source.length; j++) {
            newSource += source.charAt(j);
        }

        if (forbiddenHash[newSource]) {
            continue;
        }
        stack.push(newSource);
        nextPoint(newSource, target, stack, ret, forbiddenHash);
        stack.pop();
    }
}

module.exports = alphabetPath;
