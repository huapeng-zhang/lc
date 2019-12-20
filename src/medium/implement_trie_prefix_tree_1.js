/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {
        isWorld: false,
        children: {}
    }
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word || !word.length) {
        return;
    }
    let parent = this.root;
    for (let i = 0; i < word.length; i++) {
        const key = word.charAt(i);

        let node = parent.children[key];
        if (!node) {
            node = {
                isWorld: i === word.length-1,
                children: {}
            };
            parent.children[key] = node;
        }
        parent = node;
    }
    parent.isWorld = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (!word || !word.length) {
        return true;
    }
    let parent = this.root;
    for (let i = 0; i < word.length; i++) {
        const key = word.charAt(i);
        let node = parent.children[key];

        if (!node) {
            return false;
        }
        parent = node;
    }

    return parent.isWorld;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if (!prefix || !prefix.length) {
        return true;
    }

    let parent = this.root;
    for (let i = 0; i < prefix.length; i++) {
        const key = prefix.charAt(i);
        let node = parent.children[key];

        if (!node) {
            return false;
        }
        parent = node;
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

module.exports = Trie;
