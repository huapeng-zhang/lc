const s1 = require('@medium/sort_an_array_1');
const s2 = require('@medium/sort_an_array_2');
const s3 = require('@medium/sort_an_array_3');

describe('sort an array', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[5,2,3,1]],
            output: [1,2,3,5]
        }, {
            input: [[5,1,1,2,0,0]],
            output: [0,0,1,1,2,5]
        }, {
            input: [[4,5]],
            output: [4,5]
        }, {
            input: [[5,4]],
            output: [4,5]
        }];
    });

    it(s1.description, () => {
        cases.forEach(c => {
            expect(s1.content.apply(null, c.input)).toEqual(c.output);
        });
    });
    it(s2.description, () => {
        cases.forEach(c => {
            expect(s2.content.apply(null, c.input)).toEqual(c.output);
        });
    });
    it(s3.description, () => {
        cases.forEach(c => {
            expect(s3.content.apply(null, c.input)).toEqual(c.output);
        });
    });
});
