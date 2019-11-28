const s1 = require('@medium/swap_nodes_in_pairs_1');
const { arrayToLink } = require('@utils/link');

describe('swap nodes in pairs', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToLink([1, 2, 3, 4])],
            output: arrayToLink([2, 1, 4, 3])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    })
});
