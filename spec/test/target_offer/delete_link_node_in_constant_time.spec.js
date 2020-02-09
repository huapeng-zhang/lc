const { arrayToLink } = require('@utils/link');
const s1 = require('@target_offer/delete_link_node_in_constant_time');

describe('delete link node in constant time', () => {
    let cases = null;

    beforeEach(() => {
        const link1 = arrayToLink([1]);
        const node1 = link1;

        const link2 = arrayToLink([1,2,3]);
        const node2 = link2.next;

        const link3 = arrayToLink([1,2,3]);
        const node3 = link3.next.next;

        cases = [{
            input: [null, null],
            output: null
        }, {
            input: [link1, node1],
            output: null
        }, {
            input: [link2, node2],
            output: arrayToLink([1,3])
        }, {
            input: [link3, node3],
            output: arrayToLink([1,2])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
