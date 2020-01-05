/**
 * @param {number[]} A
 */
var RLEIterator = function(A) {
    this.data = A;
    this.pos = 0;
    this.count = this.data[this.pos];

    return this;
};

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    if (this.pos >= this.data.length) {
        return -1;
    }
    while (n > 0) {
        if (this.count < n) {
            n -= this.count;

            this.pos += 2;
            if (this.pos >= this.data.length) {
                return -1;
            }
            this.count = this.data[this.pos];
        } else {
            this.count -= n;
            n = 0;
        }
    }
    return this.data[this.pos+1];
};

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */

module.exports = RLEIterator;
