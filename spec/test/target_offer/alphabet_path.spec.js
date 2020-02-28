const s1 = require('@target_offer/alphabet_path');

describe('find all alphabet path', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: ['mf','oe',[]],
            output: [['mf','nf','of','oe'],['mf','nf','ne','oe'],['mf','me','ne','oe']],
        }, {
            input: ['mf','oe',['of']],
            output: [['mf','nf','ne','oe'],['mf','me','ne','oe']]
        }, {
            input: ['mf','mf',[]],
            output: [['mf']]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const output = s1.apply(null, c.input);
            expect(output.length).toEqual(c.output.length);
            c.output.forEach(item => expect(output).toContain(item));
        });
    });
});
