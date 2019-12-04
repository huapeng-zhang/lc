const s1 = require('@medium/merge_intervals_1');
const s2 = require('@medium/merge_intervals_2');

describe('merge intervals', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[[1,3],[2,6],[8,10],[15,18]]],
            output: [[1,6],[8,10],[15,18]]
        }, {
            input: [[[1,4],[4,5]]],
            output: [[1,5]]
        }, {
            input: [[[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]],
            output: [[1,3],[4,7]]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const actual = s1.apply(null, c.input);

            expect(actual.length).toEqual(c.output.length);
            c.output.forEach(item => expect(actual).toContain(item));
        })
    });
    it('solution 2', () => {
        cases.forEach(c => {
            const actual = s2.apply(null, c.input);

            expect(actual.length).toEqual(c.output.length);
            c.output.forEach(item => expect(actual).toContain(item));
        })
    });
});
