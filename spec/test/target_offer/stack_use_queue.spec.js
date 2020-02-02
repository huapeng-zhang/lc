const s1 = require('@target_offer/stack_use_queue');

describe('stack use queue', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            method: 'push',
            params: ['A'],
            output: undefined
        }, {
            method: 'push',
            params: ['B'],
            output: undefined
        }, {
            method: 'push',
            params: ['C'],
            output: undefined
        }, {
            method: 'pop',
            params: [],
            output: 'C'
        }, {
            method: 'pop',
            params: [],
            output: 'B'
        }, {
            method: 'push',
            params: ['D'],
            output: undefined
        }, {
            method: 'pop',
            params: [],
            output: 'D'
        }, {
            method: 'pop',
            params: [],
            output: 'A'
        }, {
            method: 'pop',
            params: [],
            throws: Error
        }];
    });

    it('solution 1', () => {
        const stack = new s1();
        cases.forEach(c => {
            if (c.output !== undefined) {
                expect(stack[c.method].apply(stack, c.params)).toEqual(c.output);
            } else if (c.throws !== undefined) {
                expect(() => stack[c.method].apply(stack, c.params)).toThrowError(c.throws);
            } else {
                stack[c.method].apply(stack, c.params);
            }
        })
    });
});
