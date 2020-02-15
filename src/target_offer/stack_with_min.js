
function StackWithMin() {
    this.data = [];
    this.minNum = undefined;
}

StackWithMin.prototype.push = function (val) {
    const type = Object.prototype.toString.call(val);
    if (type !== '[object Number]') {
        throw new Error(`Invalid parameter for push. Expect "number", got ${type}`);
    }

    if (!this.data.length) {
        this.minNum = val;
        this.data.push(val);
        return;
    }

    /**
     * 将delta差值压进队列
     * case 1: delta为正，则表明新值大于当前最小值，delta为其与当前最小值的差
     * case 2: delta为负，则表明新值小于当前最小值，delta为其与上一个最小值的差
     */
    this.data.push(val - this.minNum);
    if (this.minNum > val) {
        this.minNum = val;
    }
};

StackWithMin.prototype.pop = function () {
    if (!this.data.length) {
        throw new Error('The stack is empty');
    }

    // 获取stack中保存的delta值
    const delta = this.data.pop();
    let ret;
    // delta < 0, 表示当前要弹出的值是最小值，delta是前一个最小值与当前最小值的差
    if (delta < 0) {
        ret = this.minNum;
        this.minNum = this.minNum - delta;
    // delta >= 0, 表示当前要弹出的值不是最小值，delta是当前值与当前最小值的差
    } else {
        ret = this.minNum + delta;
    }
    return ret;
};

StackWithMin.prototype.min = function() {
    if (!this.data.length) {
        throw new Error('The stack is empty');
    }

    return this.minNum;
};

module.exports = StackWithMin;
