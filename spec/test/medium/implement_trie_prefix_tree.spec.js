const s1 = require('@medium/implement_trie_prefix_tree_1');

describe('implement trie prefix tree', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            operations: [
                ['insert', 'apple', undefined],
                ['search', 'apple', true],
                ['search', 'app', false],
                ['startsWith', 'app', true],
                ['insert', 'app', undefined],
                ['search', 'app', true]
            ],
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const obj = new s1();

            c.operations.forEach(operation => {
                const [method, args, output] = operation;
                if (output !== undefined) {
                    expect(obj[method].apply(obj, [args])).toEqual(output);
                } else {
                    obj[method].apply(obj, [args]);
                }
            });
        });
    });
});
