/**
 * 计算Fibonacci数列的值
 *
 * @param {number} num
 * @return {number}
 */
function fibonacci(num) {
    if (num <= 0) {
        return 0;
    }

    if (num === 1) {
        return 1;
    }

    return fibonacci(num-2) + fibonacci(num-1);
}

module.exports = {
    description: '求斐波那契数列，递归解法',
    solution: fibonacci
};
