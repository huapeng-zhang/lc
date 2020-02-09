const { arrayToLink } = require('@utils/link');
const s1 = require('@target_offer/kth_node_from_end');

describe('kth node from end', () => {
    let cases = null;

    beforeEach(() => {
        const result = arrayToLink([1,2,3]);
        cases = [{
            input: [null, 0],
            output: null
        }, {
            input: [arrayToLink([1,2,3]), 4],
            output: null
        }, {
            input: [arrayToLink([1,2,3]), 3],
            output: result
        }, {
            input: [arrayToLink([1,2,3]), 2],
            output: result.next
        }, {
            input: [arrayToLink([1,2,3]), 1],
            output: result.next.next
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
