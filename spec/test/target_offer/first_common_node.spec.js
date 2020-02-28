const { arrayToLink } = require('@utils/link');
const s1 = require('@target_offer/first_common_node_1');
const s2 = require('@target_offer/first_common_node_2');

describe('first common node', () => {
    let cases = null;

    beforeEach(() => {
        cases = [];

        let lc = arrayToLink([6,7]);
        let l1 = arrayToLink([1,2,3]);
        let l2 = arrayToLink([4,5]);
        l1.next.next.next = lc;
        l2.next.next = lc;
        cases.push({
            input: [l1,l2],
            output: lc
        });
        cases.push({
            input: [l2,l1],
            output: lc
        });

        l1 = arrayToLink([1,2,3,4,5]);
        cases.push({
            input: [l1,l1],
            output: l1
        });

        lc = arrayToLink([9]);
        l1 = arrayToLink([1,2,3,4]);
        l2 = arrayToLink([5,6,7,8]);
        l1.next.next.next.next = lc;
        l2.next.next.next.next = lc;
        cases.push({
            input: [l1,l2],
            output: lc
        });
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
    it('solution 2', () => {
        cases.forEach(c => expect(s2.apply(null, c.input)).toEqual(c.output));
    });
});
