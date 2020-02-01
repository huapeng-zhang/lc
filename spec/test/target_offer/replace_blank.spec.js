const { toIntArray } = require('@utils/str');
const s1 = require('@target_offer/replace_blank');

describe('replace blank', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [toIntArray('  ')],
            output: toIntArray('%20%20')
        }, {
            input: [toIntArray('%20')],
            output: toIntArray('%20')
        }, {
            input: [toIntArray(' a b ')],
            output: toIntArray('%20a%20b%20')
        }, {
            input: [toIntArray('')],
            output: toIntArray('')
        }, {
            input: [null],
            output: null
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            s1.apply(null, c.input);
            expect(c.input[0]).toEqual(c.output);
        });
    });
});