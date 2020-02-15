/**
 * 判断输出序列是否是栈输入序列的一种可能
 *
 * @param {number[]} input
 * @param {number[]} output
 */
function isStackOutputSequence(input, output) {
    if (!input || !input.length || !output || !output.length) {
        if (input && input.length || output && output.length) {
            return false;
        }
        return true;
    }

    if (input.length !== output.length) {
        return false;
    }

    const stack = [];
    let inputPos = 0;
    while (output.length) {
        const curOutput = output.shift();
        if (!stack.length || stack[stack.length-1] !== curOutput) {
            while (inputPos < input.length) {
                const curInput = input[inputPos++];
                stack.push(curInput);

                if (curInput === curOutput) {
                    break;
                }
            }
        }
        const top = stack.pop();
        if (curOutput !== top) {
            return false;
        }
    }
    return true;
}

module.exports = isStackOutputSequence;
