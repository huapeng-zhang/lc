const s1 = require('@medium/unique_paths_1');
const s2 = require('@medium/unique_paths_2');

describe('unique paths', () => {
    let cases = [{
        input: [3, 2],
        output: 3
    }, {
        input: [7, 3],
        output: 28
    }, {
        input: [3, 1],
        output: 1
    }, {
        input: [51, 9],
        output: 1916797311
    }];

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});
