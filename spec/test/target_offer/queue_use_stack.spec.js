const s1 = require('@target_offer/queue_use_stack');

describe('queue use stack', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            method: 'append',
            params: ['A'],
            output: undefined
        }, {
            method: 'append',
            params: ['B'],
            output: undefined
        }, {
            method: 'append',
            params: ['C'],
            output: undefined
        }, {
            method: 'delete',
            params: [],
            output: 'A'
        }, {
            method: 'append',
            params: ['D'],
            output: undefined
        }, {
            method: 'append',
            params: ['E'],
            output: undefined
        }, {
            method: 'delete',
            params: [],
            output: 'B'
        }, {
            method: 'delete',
            params: [],
            output: 'C'
        }, {
            method: 'delete',
            params: [],
            output: 'D'
        }, {
            method: 'delete',
            params: [],
            output: 'E'
        }, {
            method: 'delete',
            params: [],
            throws: Error
        }];
    });

    it('solution 1', () => {
        const q = new s1();

        cases.forEach(c => {
            if (c.throws === undefined) {
                expect(q[c.method].apply(q, c.params)).toEqual(c.output);
            } else {
                expect(() => q[c.method].apply(q, c.params)).toThrowError(c.throws);
            }
        });
    });
});

