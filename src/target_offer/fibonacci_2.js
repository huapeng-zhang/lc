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

    let f2 = 0;
    let f1 = 1;

    let f;
    for (let i = 2; i <= num; i++) {
        f = f1 + f2;
        f2 = f1;
        f1 = f;
    }
    return f;
}

module.exports = {
    description: '求斐波那契数列，循环解法',
    solution: fibonacci
};
