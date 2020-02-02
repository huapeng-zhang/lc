
function Queue() {
    this.stackIn = [];
    this.stackOut = [];
}

Queue.prototype.append = function(val) {
    this.stackIn.push(val);
};

Queue.prototype.delete = function() {
    if (this.stackIn.length === 0 && this.stackOut.length === 0) {
        throw Error('Queue is empty!');
    }

    if (this.stackOut.length === 0) {
        while(this.stackIn.length) {
            this.stackOut.push(this.stackIn.pop());
        }
    }

    return this.stackOut.pop();
};

module.exports = Queue;
