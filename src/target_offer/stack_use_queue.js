
function Stack() {
    this.q1 = [];
    this.q2 = [];
}

Stack.prototype.push = function (val) {
    const dataQ = this.q2.length === 0 ? this.q1 : this.q2;
    dataQ.push(val);
};

Stack.prototype.pop = function () {
    if (this.q1.length === 0 && this.q2.length === 0) {
        throw new Error('Stack is empty');
    }

    let dataQ, backupQ;
    if (this.q1.length) {
        dataQ = this.q1;
        backupQ = this.q2;
    } else {
        dataQ = this.q2;
        backupQ = this.q1;
    }

    while(dataQ.length > 1) {
        backupQ.push(dataQ.shift());
    }

    return dataQ.shift();
};

module.exports = Stack;
