const { arrayToLink } = require('@utils/link');
const s1 = require('@hard/reverse_nodes_in_k_group_1');

describe('reverse nodes in k group', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToLink([1,2,3,4,5]),2],
            output: arrayToLink([2,1,4,3,5])
        }, {
            input: [arrayToLink([1,2,3,4,5]),3],
            output: arrayToLink([3,2,1,4,5])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
