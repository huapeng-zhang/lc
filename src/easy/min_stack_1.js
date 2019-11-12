/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const min = this.min;

    if (x < min) {
        this.min = x;
    }
    this.stack.push(x - min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const top = this.stack.pop();
    const min = this.min;

    if (top < 0) {
        this.min = min - top;
        return min;
    } else {
        return min + top;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const top = this.stack[this.stack.length - 1];

    if (top < 0) {
        return this.min;
    } else {
        return this.min + top;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

module.exports = MinStack;
