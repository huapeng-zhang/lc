const s1 = require('@medium/decode_ways_1');

describe('decode ways', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: ['12'],
            output: 2,
        }, {
            input: ['226'],
            output: 3
        }, {
            input: [''],
            output: 0
        }, {
            input: ['0'],
            output: 0
        }, {
            input: ['20'],
            output: 1
        }, {
            input: ['80'],
            output: 0
        }, {
            input: ['100'],
            output: 0
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toBe(c.output);
        });
    });
});
