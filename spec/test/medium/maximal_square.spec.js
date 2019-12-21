const s1 = require('@medium/maximal_square_1');
const s2 = require('@medium/maximal_square_2');

describe('maximal square', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[
                ['1','0','1','0','0'],
                ['1','0','1','1','1'],
                ['1','1','1','1','1'],
                ['1','0','0','1','0']
            ]],
            output: 4
        }, {
            input: [[]],
            output: 0
        }, {
            input: [[
                ['0']
            ]],
            output: 0
        }, {
            input: [[
                ['1', '1']
            ]],
            output: 1
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        })
    });
});
