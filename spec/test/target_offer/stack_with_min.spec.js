const s1 = require('@target_offer/stack_with_min');

describe('stack with min', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            method: 'push',
            input: [-5],
            output: undefined
        }, {
            method: 'min',
            input: [],
            output: -5
        }, {
            method: 'push',
            input: [-4],
            output:undefined
        }, {
            method: 'min',
            input: [],
            output: -5
        }, {
            method: 'push',
            input: [-3],
            output: undefined
        }, {
            method: 'push',
            input: [-6],
            output: undefined
        }, {
            method: 'min',
            input: [],
            output: -6
        }, {
            method: 'push',
            input: [-7],
            output: undefined
        }, {
            method: 'min',
            input: [],
            output: -7
        }, {
            method: 'push',
            input: [-2],
            output: undefined
        }, {
            method: 'min',
            input: [],
            output: -7
        }, {
            method: 'push',
            input: [-2],
            output: undefined
        }, {
            method: 'min',
            input: [],
            output: -7
        }, {
            method: 'push',
            input: [-1],
            output: undefined
        }, {
            method: 'min',
            input: [],
            output: -7
        }, {
            method: 'pop',
            input: [],
            output: -1
        }, {
            method: 'min',
            input: [],
            output: -7
        }, {
            method: 'pop',
            input: [],
            output: -2
        }, {
            method: 'min',
            input: [],
            output: -7
        }, {
            method: 'pop',
            input: [],
            output: -2
        }, {
            method: 'min',
            input: [],
            output: -7
        }, {
            method: 'pop',
            input: [],
            output: -7
        }, {
            method: 'min',
            input: [],
            output: -6
        }, {
            method: 'pop',
            input: [],
            output: -6
        }, {
            method: 'min',
            input: [],
            output: -5
        }, {
            method: 'pop',
            input: [],
            output: -3
        }, {
            method: 'min',
            input: [],
            output: -5
        }, {
            method: 'pop',
            input: [],
            output: -4
        }, {
            method: 'min',
            input: [],
            output: -5
        }, {
            method: 'pop',
            input: [],
            output: -5
        }];
    });

    it('solution 1', () => {
        const stack = new s1();

        cases.forEach(c => {
            expect(stack[c.method].apply(stack, c.input)).toEqual(c.output);
        });
    });
});
