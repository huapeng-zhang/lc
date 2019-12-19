const s1 = require('@medium/number_of_islands_1');

describe('number of islands', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[
                ['1','1','1','1',0],
                ['1','1',0,'1',0],
                ['1','1',0,0,0],
                [0,0,0,0,0]
            ]],
            output: 1
        }, {
            input: [[
                ['1','1',0,0,0],
                ['1','1',0,0,0],
                [0,0,'1',0,0],
                [0,0,0,'1','1']
            ]],
            output: 3
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
