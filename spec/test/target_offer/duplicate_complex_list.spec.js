const { arrayToLink } = require('@utils/link');
const s1 = require('@target_offer/duplicate_complex_list');

describe('duplicate complex list', () => {
    let cases = null;

    beforeEach(() => {
        const abcde = arrayToLink(['A','B','C','D','E']);
        const a = abcde;
        const b = a.next;
        const c = b.next;
        const d = c.next;
        const e = d.next;
        a.sibling = c;
        b.sibling = e;
        c.sibling = null;
        d.sibling = b;
        e.sibling = null;

        const ab1 = arrayToLink(['A','B']);
        const a1 = ab1;
        const b1 = a1.next;
        a1.sibling = b1;
        b1.sibling = a1;

        const ab2 = arrayToLink(['A','B']);
        const a2 = ab2;
        const b2 = a2.next;
        a2.sibling = a2;
        b2.sibling = b2;

        cases = [{
            input: [null],
            output: null
        }, {
            input: [abcde],
            output: abcde
        }, {
            input: [ab1],
            output: ab1
        }, {
            input: [ab2],
            output: ab2
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            if (c.output !== null) {
                expect(s1.apply(null, c.input)).not.toBe(c.output);
            }
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
