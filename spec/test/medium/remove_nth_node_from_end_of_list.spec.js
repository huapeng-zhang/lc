const s1 = require('@medium/remove_nth_node_from_end_of_list_1');
const { arrayToLink } = require('@utils/link');

describe('remove nth node from end of list', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToLink([1, 2, 3, 4, 5]), 2],
            output: arrayToLink([1, 2, 3, 5])
        }, {
            input: [arrayToLink([1, 2]), 2],
            output: arrayToLink([2])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    });
});
