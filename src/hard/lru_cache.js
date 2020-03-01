/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.hash = {};
    this.head = {val: null, key: null};
    this.head.prev = this.head;
    this.head.next = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.hash[key];
    if (node === undefined) {
        return -1;
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;

    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) {
        return;
    }

    let node = this.hash[key];
    if (!node && this.size === this.capacity) {
        const invalid = this.head.prev;
        this.head.prev = invalid.prev;
        invalid.prev.next = this.head;
        delete this.hash[invalid.key];
        this.size--;
    }

    if (node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    } else {
        node = {
            key: key,
            next: this.head.next,
            prev: this.head
        };
        this.size++;
    }
    node.val = value;
    this.head.next.prev = node;
    this.head.next = node;
    this.hash[key] = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache;
